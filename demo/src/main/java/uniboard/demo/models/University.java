package uniboard.demo.models;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import uniboard.demo.models.base.BaseModel;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class University extends BaseModel {
  String name;
  String email;
}
