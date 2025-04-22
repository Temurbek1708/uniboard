package uniboard.demo.dto.post;

import lombok.Data;

@Data
public class PostDto {
  private Long id;
  private String title;
  private String content;
  private Long categoryId;
  private Long authorId;
}