package com.sganzerla.model;

import lombok.Data;
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
@ToString
public class Usuario implements UserDetails {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @NotEmpty(message = "O email de usuário não pode ser vazio")
    @NotBlank
    @Email(message = "Email inválido",
            regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")
    private String email;
    @NotNull(message = "A senha não pode ser nula")
//    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$" , message = "A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número")
    private String password;

    @NotNull(message = "O nome de usuário não pode ser nulo")
    @NotEmpty(message = "O nome de usuário não pode ser vazio")
    @NotBlank
    @Size(min = 4, max = 255, message = "O tamanho deve ser entre {min} e {max}")
    private String nome;

    @NotNull(message = "O tipo não pode ser nulo")
    @NotEmpty(message = "O tipo não pode ser vazio")
    @NotBlank
    @Size(max = 25)
    private String tipo; //administrador, professor ou instrutor

    @Column(length = 20)
    @NotNull(message = "O telefone não pode ser nulo")
    @NotEmpty(message = "O telefone não pode ser vazio")
    @NotBlank
    @Size(max = 20, message = "O telefone deve ser entre 0 e {max}")
    private String telefone;

    @Column(length = 20)
    @NotNull(message = "O RA não pode ser nulo")
    @NotEmpty(message = "O RA de usuário não pode ser vazio")
    @NotBlank
    @Size(max = 20, message = "O RA deve ser entre 0 e {max}")
    private String ra;

    @ManyToOne
    @JoinColumn(name = "cursosgraduacao_id" , referencedColumnName = "id")
    private CursosGraduacao cursoGraduacao;


    //    @Enumerated(EnumType.STRING)
//    private AuthProvider provider;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "users_authorities",
            joinColumns = @JoinColumn(
                    name = "usuario_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "authority_id", referencedColumnName = "id"))
    private Set<Authority> userAuthorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return new ArrayList<GrantedAuthority>(this.userAuthorities);
    }

    @Override
    public String getUsername() {
        return this.getRa();
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
