package uniboard.demo.models;

import jakarta.persistence.*;
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
public class Post extends BaseModel {
  String title;

  @Column(length = 10000)
  String content;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "users")
  User user;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "category")
  Category category;
}
