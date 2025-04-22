package uniboard.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class Settings extends BaseModel {
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "university")
  University university;
}
