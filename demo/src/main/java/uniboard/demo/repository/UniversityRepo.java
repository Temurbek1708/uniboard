package uniboard.demo.repository;

import jakarta.persistence.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uniboard.demo.models.University;
import uniboard.demo.models.base.BaseModel;

@Repository
public interface UniversityRepo extends JpaRepository<University, Long> {

}
