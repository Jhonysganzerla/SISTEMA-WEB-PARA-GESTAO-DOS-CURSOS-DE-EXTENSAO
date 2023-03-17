package com.sganzerla.model;

import com.sganzerla.annotation.UniqueUsername;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;

@Entity
@Data
public class Habilidades {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "O nome da habilidade não pode ser nulo")
    @Size(max = 50, message = "O tamanho deve no máximo {max} caracteres")
    private String nome;

    @Size(max = 600, message = "O tamanho deve no máximo {max} caracteres")
    private String descricao;

}
