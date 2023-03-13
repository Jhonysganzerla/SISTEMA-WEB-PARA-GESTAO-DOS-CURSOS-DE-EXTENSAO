package com.sganzerla.repository;

import com.sganzerla.model.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuariosRepository extends JpaRepository<Usuario, Long> {
    Usuario findByRa(String ra);
    List<Usuario> findAllByRa(String nome);
    List<Usuario> findAllByRa(Sort sort, String ra);
    Page<Usuario> findAllByRa(Pageable pageable, String ra);




}
