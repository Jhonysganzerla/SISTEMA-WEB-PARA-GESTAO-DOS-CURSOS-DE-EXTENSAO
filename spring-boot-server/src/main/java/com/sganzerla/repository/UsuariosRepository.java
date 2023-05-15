package com.sganzerla.repository;

import com.sganzerla.model.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuario, Long> {
    Usuario findByRa(String ra);
    List<Usuario> findAllByRa(String nome);
    List<Usuario> findAllByRa(Sort sort, String ra);
    Page<Usuario> findAllByRa(Pageable pageable, String ra);

    Long countUsuarioByTipo(String tipo);




}
