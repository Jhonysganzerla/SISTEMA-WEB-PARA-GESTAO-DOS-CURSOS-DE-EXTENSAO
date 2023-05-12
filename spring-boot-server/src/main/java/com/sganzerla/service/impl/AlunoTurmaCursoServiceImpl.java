package com.sganzerla.service.impl;

import com.sganzerla.model.AlunoTurmaCurso;
import com.sganzerla.repository.AlunoTurmaCursoRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.AlunoTurmaCursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import javax.persistence.Transient;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class AlunoTurmaCursoServiceImpl extends CrudServiceImpl<AlunoTurmaCurso, Long> implements AlunoTurmaCursoService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    AlunoTurmaCursoRepository alunoTurmaCursoRepository;

    AuthorityRepository authorityRepository;


    public AlunoTurmaCursoServiceImpl(AlunoTurmaCursoRepository alunoTurmaCursoRepository, AuthorityRepository authorityRepository) {
        this.alunoTurmaCursoRepository = alunoTurmaCursoRepository;
        this.authorityRepository = authorityRepository;
    }


    @Override
    protected JpaRepository<AlunoTurmaCurso, Long> getRepository() {
        return this.alunoTurmaCursoRepository;
    }


    @Override
    public List<AlunoTurmaCurso> findAllByAluno(Long idAluno) {
        return alunoTurmaCursoRepository.findAllByAluno(idAluno);
    }

    @Override
    public List<AlunoTurmaCurso> findAllByTurmaCurso(Long idTurmaCurso) {
        return alunoTurmaCursoRepository.findAllByTurmaCurso(idTurmaCurso);
    }

    @Override
    @Transactional
    public void deleteByAlunoAndTurma(Long idAluno, Long idTurmaCurso) {
        this.deleteAllByAlunoAndTurmaCurso(idAluno, idTurmaCurso);
    }

    public void deleteAllByAluno(Long idAluno) {
    	alunoTurmaCursoRepository.deleteAllByAluno(idAluno);
    }

    @Transactional
    public void deleteAllByAlunoAndTurmaCurso(Long idAluno, Long idTurmaCurso) {
    	alunoTurmaCursoRepository.deleteAllByAlunoAndTurmaCurso(idAluno, idTurmaCurso);
    }
}

