package com.sganzerla.repository;

import com.sganzerla.model.AlunoTurmaCurso;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlunoTurmaCursoRepository extends JpaRepository<AlunoTurmaCurso, Long> {

    List<AlunoTurmaCurso> findAllByAluno(Long id);

    List<AlunoTurmaCurso> findAllByTurmaCurso(Long id);


}
