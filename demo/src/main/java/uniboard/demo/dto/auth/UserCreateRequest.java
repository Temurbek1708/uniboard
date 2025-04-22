package uniboard.demo.dto.auth;

import lombok.Data;

@Data
public class UserCreateRequest {
  private String firstname;
  private String lastname;
  private String email;
  private String password;
  private String role;           // e.g., "STUDENT", "TEACHER"
  private Long universityId;
}
