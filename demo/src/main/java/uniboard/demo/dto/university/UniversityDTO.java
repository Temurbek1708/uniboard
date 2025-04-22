package uniboard.demo.dto.university;

import lombok.Data;

@Data
public class UniversityDTO {
  private Long id; // if present, do update, otherwise create
  private String name;
  private String address;
}
