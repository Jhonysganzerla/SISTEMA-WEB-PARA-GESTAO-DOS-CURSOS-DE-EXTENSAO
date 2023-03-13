package com.sganzerla.security;

import com.sganzerla.model.Usuario;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDTO {

    private Long id;
    private String name;
    private String username;

    public UserDTO(Usuario usuario) {
        this.id = usuario.getId();
        this.name = usuario.getRa();
        this.username = usuario.getUsername();
    }
}
