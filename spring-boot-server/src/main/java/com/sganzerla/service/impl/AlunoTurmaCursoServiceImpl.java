package com.sganzerla.service.impl;

import com.sganzerla.model.AlunoTurmaCurso;
import com.sganzerla.repository.AlunoTurmaCursoRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.AlunoTurmaCursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

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
    public List<AlunoTurmaCurso> findAllByAluno_Id(Long idAluno) {
        return alunoTurmaCursoRepository.findAllByAluno(idAluno);
    }

}
