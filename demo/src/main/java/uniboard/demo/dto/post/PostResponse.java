package uniboard.demo.dto.post;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PostResponse {
  private Long id;
  private String title;
  private String content;
}
