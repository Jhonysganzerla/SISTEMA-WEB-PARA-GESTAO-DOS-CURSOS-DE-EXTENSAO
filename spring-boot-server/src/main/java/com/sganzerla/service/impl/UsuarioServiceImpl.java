package com.sganzerla.service.impl;

import com.sganzerla.model.Authority;
import com.sganzerla.model.Usuario;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.repository.UsuariosRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;

@Service
public class UsuarioServiceImpl extends CrudServiceImpl<Usuario, Long>  implements UsuariosService, UserDetailsService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    UsuariosRepository usuariosRepository;

    AuthorityRepository authorityRepository;

    BCryptPasswordEncoder bCryptPasswordEncoder;

    public UsuarioServiceImpl(UsuariosRepository usuariosRepository, AuthorityRepository authorityRepository) {
        this.usuariosRepository = usuariosRepository;
        this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
        this.authorityRepository = authorityRepository;
    }

    public Usuario save(Usuario usuario) {
        if (authUserService.checkPermission("ROLE_ADMIN") || authUserService.checkPermission("ROLE_PROFESSOR")) {


            HashSet<Authority> authorities = new HashSet<>();

            //Adiciona autoriazao conforme tipo
            if (Objects.equals(usuario.getTipo(), "administrador")) {
                authorities.add(authorityRepository.findById(1L).orElse(new Authority()));
            } else if (Objects.equals(usuario.getTipo(), "professor")) {
                authorities.add(authorityRepository.findById(2L).orElse(new Authority()));
            } else if (Objects.equals(usuario.getTipo(), "instrutor")) {
                authorities.add(authorityRepository.findById(3L).orElse(new Authority()));
            }

            usuario.setUserAuthorities(authorities);

            if (usuario.getId() == null) {
                usuario.setPassword(bCryptPasswordEncoder.encode(usuario.getPassword()));
                this.loadUserByUsername(usuario.getUsername());
            } else {
                usuariosRepository.findById(usuario.getId()).ifPresent(usuarioBanco -> {
                    if (usuario.getPassword().equals(usuarioBanco.getPassword()) || usuario.getPassword().equals("")) {
                        usuario.setPassword(usuarioBanco.getPassword());
                    } else {
                        usuario.setPassword(bCryptPasswordEncoder.encode(usuario.getPassword()));
                    }
                });
            }

            return usuariosRepository.save(usuario);
        }
        return null;
    }

    @Override
    protected JpaRepository<Usuario, Long> getRepository() {
        return usuariosRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String ra) throws UsernameNotFoundException {
        Usuario usuario = usuariosRepository.findByRa(ra);

        if (usuario != null) {
            throw new UsernameNotFoundException("Login inválido!");
        }
        return null;
    }

    @Override
    public List<Usuario> findAll() {
        if (authUserService.checkPermission("ROLE_ADMIN")  || authUserService.checkPermission("ROLE_PROFESSOR")) {
            return super.findAll();
        }
        return usuariosRepository.findAllByRa(authUserService.getUserLogged().getPrincipal().toString());
    }

    @Override
    public List<Usuario> findAll(Sort sort) {
        if (authUserService.checkPermission("ROLE_ADMIN")  || authUserService.checkPermission("ROLE_PROFESSOR")) {
            return super.findAll(sort);
        }
        return usuariosRepository.findAllByRa(sort, authUserService.getUserLogged().getPrincipal().toString());

    }

    @Override
    public Page<Usuario> findAll(Pageable pageable) {
        if (authUserService.checkPermission("ROLE_ADMIN")  || authUserService.checkPermission("ROLE_PROFESSOR")) {
            return super.findAll(pageable);
        }
        return usuariosRepository.findAllByRa(pageable, authUserService.getUserLogged().getPrincipal().toString());
    }

    @Override
    public void delete(Long aLong) {
        if (authUserService.checkPermission("ROLE_ADMIN")  || authUserService.checkPermission("ROLE_PROFESSOR")) {
            super.delete(aLong);
        }
    }

    @Override
    public void delete(Usuario entity) {
        if (authUserService.checkPermission("ROLE_ADMIN")  || authUserService.checkPermission("ROLE_PROFESSOR")) {

            super.delete(entity);
        }
    }

    @Override
    public void deleteAll() {
        if (authUserService.checkPermission("ROLE_ADMIN")  || authUserService.checkPermission("ROLE_PROFESSOR")) {
            super.deleteAll();
        }
    }

    @Override
    public void delete(Iterable<Usuario> iterable) {
        if (authUserService.checkPermission("ROLE_ADMIN")  || authUserService.checkPermission("ROLE_PROFESSOR")) {
            super.delete(iterable);

        }
    }
}
