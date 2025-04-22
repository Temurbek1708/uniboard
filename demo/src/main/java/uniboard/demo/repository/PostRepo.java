package uniboard.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uniboard.demo.models.Post;

import java.util.List;

@Repository
public interface PostRepo extends JpaRepository<Post, Long> {
  List<Post> findAllByCategoryId(Long categoryId);
}
