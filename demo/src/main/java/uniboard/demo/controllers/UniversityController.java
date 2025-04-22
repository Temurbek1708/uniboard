package uniboard.demo.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import uniboard.demo.dto.university.UniversityDTO;
import uniboard.demo.models.University;
import uniboard.demo.services.UniversityService;

@RestController
@RequestMapping("/api/v1/universities")
public class UniversityController {

  private final UniversityService universityService;

  public UniversityController(UniversityService universityService) {
    this.universityService = universityService;
  }

  @PostMapping
  @PreAuthorize("hasAnyRole('UNIVERSITY_ADMIN')")
  public ResponseEntity<University> createOrUpdate(@RequestBody UniversityDTO dto) {
    University saved = universityService.createOrUpdateUniversity(dto);
    return ResponseEntity.ok(saved);
  }

  @GetMapping("/{id}")
  public ResponseEntity<University> getById(@PathVariable Long id) {
    return ResponseEntity.ok(universityService.getUniversityById(id));
  }
}