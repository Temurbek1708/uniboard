package uniboard.demo.dto.settings;

import lombok.Data;

@Data
public class SettingsDto {
  private Long id;
  private String key;
  private String value;
  private Long universityId;
}