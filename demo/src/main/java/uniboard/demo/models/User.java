package uniboard.demo.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import uniboard.demo.models.base.BaseModel;

import java.util.ArrayList;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User extends BaseModel {
  @OneToMany(fetch = FetchType.LAZY)
  @JoinColumn(name = "role")
  Set<Role> roles;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "university")
  University university;

  String firstname;
  String lastname;
  String password;
  String email;
}
