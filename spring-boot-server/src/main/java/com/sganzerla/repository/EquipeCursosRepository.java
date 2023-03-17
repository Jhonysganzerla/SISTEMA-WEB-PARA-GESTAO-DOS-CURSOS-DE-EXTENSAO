package com.sganzerla.repository;

import com.sganzerla.model.Alunos;
import com.sganzerla.model.EquipeCursos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipeCursosRepository extends JpaRepository<EquipeCursos, Long> {
}
