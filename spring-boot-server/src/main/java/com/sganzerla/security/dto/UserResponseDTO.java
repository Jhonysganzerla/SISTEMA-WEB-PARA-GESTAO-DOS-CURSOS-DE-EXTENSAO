package com.sganzerla.security.dto;

import com.sganzerla.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDTO {

    private String name;
    private String username;
    private Set<AuthorityResponseDTO> authorities;

    public UserResponseDTO(Usuario usuario) {
        this.name = usuario.getUsername();
        this.username = usuario.getUsername();
        this.authorities = new HashSet<>();
        for (GrantedAuthority authority: usuario.getAuthorities()) {
            authorities.add( new AuthorityResponseDTO(authority.getAuthority()) );
        }
    }

}
