package uniboard.demo.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import uniboard.demo.dto.auth.AuthResponse;
import uniboard.demo.dto.auth.SignInRequest;
import uniboard.demo.dto.auth.SignUpRequest;
import uniboard.demo.dto.auth.UserCreateRequest;
import uniboard.demo.models.Role;
import uniboard.demo.models.User;
import uniboard.demo.services.AuthService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

  private final AuthService authService;

  @PostMapping("/create")
  @PreAuthorize("hasAnyRole('ADMIN', 'UNIVERSITY_ADMIN')")
  public ResponseEntity<User> createUser(@RequestBody UserCreateRequest request) {
    User createdUser = authService.createUser(request);
    return ResponseEntity.ok(createdUser);
  }

  @PostMapping("/signin")
  public ResponseEntity<AuthResponse> signin(@RequestBody SignInRequest request) {
    AuthResponse response = authService.signIn(request);
    return ResponseEntity.ok(response);
  }

  @GetMapping("/university/{universityId}/users")
  public ResponseEntity<List<User>> getUsersByUniversity(@PathVariable Long universityId) {
    return ResponseEntity.ok(authService.getUsersByUniversity(universityId));
  }

  @GetMapping("/university/{universityId}/users/role/{role}")
  public ResponseEntity<List<User>> getUsersByUniversityAndRole(
    @PathVariable Long universityId,
    @PathVariable Role role
  ) {
    return ResponseEntity.ok(authService.getUsersByUniversityAndRole(universityId, role));
  }

  @GetMapping("/user/{id}")
  public ResponseEntity<User> getUserById(@PathVariable Long id) {
    return ResponseEntity.ok(authService.getUserById(id));
  }
}