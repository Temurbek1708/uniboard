package uniboard.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uniboard.demo.models.Settings;

@Repository
public interface SettingsRepo extends JpaRepository<Settings, Long> {
    Settings findByUniversityId(Long universityId);
}
