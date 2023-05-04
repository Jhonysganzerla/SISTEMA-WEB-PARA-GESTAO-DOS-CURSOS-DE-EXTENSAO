package com.sganzerla.repository;

import com.sganzerla.model.Chamada;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChamadaRepository extends JpaRepository<Chamada, Long> {

    List<Chamada> findAllByAlunoturmacurso_TurmaCurso(Long idTurmaCurso);
}
