package com.sganzerla.security;

import com.sganzerla.model.Usuario;
import com.sganzerla.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthUserService implements UserDetailsService {

    @Autowired
    private UsuariosRepository usuariosRepository;

    public UserDetails loadUserByUsername(String ra) throws UsernameNotFoundException {
        Usuario usuario = usuariosRepository.findByRa(ra);
        if (usuario == null) {
            throw new UsernameNotFoundException("User Not Found");
        }
        return usuario;
    }

    public boolean checkPermission(String role){
        Authentication authentication = this.getUserLogged();
        String roleAdmin = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).filter(auth -> auth.equals(role)).findFirst().orElse(null);
    return (roleAdmin != null);
    }

    public Authentication getUserLogged(){
        return SecurityContextHolder.getContext().getAuthentication();
    }

    public Usuario getUsuarioLogado(){
        return  usuariosRepository.findByRa(this.getUserLogged().getPrincipal().toString());
    }


}
