package com.sganzerla.repository;

import com.sganzerla.model.Alunos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlunosRepository extends JpaRepository<Alunos, Long> {

    List<Alunos> findAllByIdIn(List<Long> idList);

}
