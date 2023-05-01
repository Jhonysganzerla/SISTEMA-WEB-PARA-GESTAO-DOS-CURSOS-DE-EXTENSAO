package com.sganzerla.repository;

import com.sganzerla.model.TurmaCurso;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TurmaCursosRepository extends JpaRepository<TurmaCurso, Long> {

    List<TurmaCurso> findAllByIdIn(List<Long> idList);
}
