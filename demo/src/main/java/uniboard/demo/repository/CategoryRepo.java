package uniboard.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uniboard.demo.models.Category;

import java.util.List;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Long> {
  List<Category> findAllByUniversityId(Long universityId);
}
