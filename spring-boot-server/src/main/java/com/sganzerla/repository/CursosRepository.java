package com.sganzerla.repository;

import com.sganzerla.model.Cursos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CursosRepository extends JpaRepository<Cursos, Long> {
}
