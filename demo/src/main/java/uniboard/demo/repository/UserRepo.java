package uniboard.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uniboard.demo.models.User;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
  User findByEmail(String email);
  List<User> findAllByUniversityId(Long universityId);
  List<User> findAllByUniversityIdAndRolesIdIn(Long universityId, List<Long> roleIds);

}
