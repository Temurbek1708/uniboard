package uniboard.demo.config.data;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import uniboard.demo.models.Role;
import uniboard.demo.models.User;
import uniboard.demo.repository.RoleRepo;
import uniboard.demo.repository.UserRepo;

import java.util.List;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class DataInitializer {

  private final UserRepo userRepository;
  private final RoleRepo roleRepository;
  private final PasswordEncoder passwordEncoder;

  @PostConstruct
  public void initAdminUser() {
    String adminEmail = "uniboard@admin.com";

    if (userRepository.findByEmail(adminEmail) == null) {
      // Ensure the ROLE_ADMIN exists
      Role adminRole = roleRepository.findByName("ROLE_ADMIN")
        .orElseGet(() -> roleRepository.save(new Role("ROLE_ADMIN")));

      // Create admin user
      User adminUser = new User();
      adminUser.setEmail(adminEmail);
      adminUser.setPassword(passwordEncoder.encode("12345"));
      adminUser.setRoles(Set.of(adminRole));  // Or Set if you're using Set
      adminUser.setLastname("System");
      adminUser.setFirstname("Admin");

      userRepository.save(adminUser);
      System.out.println("✅ Default admin user created.");
    } else {
      System.out.println("ℹ️ Admin user already exists.");
    }
  }
}