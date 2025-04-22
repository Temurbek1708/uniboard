package uniboard.demo.config.auth;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import uniboard.demo.models.User;
import uniboard.demo.repository.UserRepo;

@Service
public class CustomUserDetailsService implements UserDetailsService {

  private final UserRepo userRepository;

  public CustomUserDetailsService(UserRepo userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByEmail(username);
    var authorities = user.getRoles()
      .stream()
      .map(role -> new org.springframework.security.core.authority.SimpleGrantedAuthority(role.getName()))
      .toList()
    ;

    return new org.springframework.security.core.userdetails.User(
      user.getEmail(),
      user.getPassword(),
      true, // whether the user is enabled
      true,              // accountNonExpired
      true,              // credentialsNonExpired
      true,              // accountNonLocked
      authorities // list of roles or authorities
    );
  }
}
