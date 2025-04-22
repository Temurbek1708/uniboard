package uniboard.demo.models.base;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@MappedSuperclass
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BaseModel {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  Long id = 0L;

  Boolean deleted = false;
  LocalDateTime created = LocalDateTime.now();
  LocalDateTime updated = LocalDateTime.now();

  Long createdBy = 0L;
  Long updatedBy = 0L;
}
