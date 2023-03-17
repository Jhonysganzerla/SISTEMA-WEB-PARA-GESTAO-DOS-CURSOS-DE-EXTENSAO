package com.sganzerla.repository;

import com.sganzerla.model.Alunos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunosRepository extends JpaRepository<Alunos, Long> {
}
