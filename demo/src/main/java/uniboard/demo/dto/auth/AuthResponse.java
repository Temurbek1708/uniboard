package uniboard.demo.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import uniboard.demo.models.User;

@Data
@AllArgsConstructor
public class AuthResponse {
  private String accessToken;
  private User user;
}