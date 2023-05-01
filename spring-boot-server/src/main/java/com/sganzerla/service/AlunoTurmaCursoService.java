package com.sganzerla.service;

import com.sganzerla.model.AlunoTurmaCurso;

import java.util.List;

public interface AlunoTurmaCursoService extends CrudService<AlunoTurmaCurso, Long>  {

    List<AlunoTurmaCurso> findAllByAluno_Id(Long idAluno);
}
