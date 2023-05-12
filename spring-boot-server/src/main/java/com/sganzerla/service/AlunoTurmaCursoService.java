package com.sganzerla.service;

import com.sganzerla.model.AlunoTurmaCurso;

import javax.transaction.Transactional;
import java.util.List;

public interface AlunoTurmaCursoService extends CrudService<AlunoTurmaCurso, Long>  {

    List<AlunoTurmaCurso> findAllByAluno(Long idAluno);

    List<AlunoTurmaCurso> findAllByTurmaCurso(Long idTurmaCurso);

    @Transactional
    void deleteByAlunoAndTurma(Long idAluno, Long idTurmaCurso);

}
