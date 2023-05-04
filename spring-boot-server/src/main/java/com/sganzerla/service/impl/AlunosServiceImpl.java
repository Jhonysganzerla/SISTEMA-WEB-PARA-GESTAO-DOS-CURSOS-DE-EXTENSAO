package com.sganzerla.service.impl;

import com.sganzerla.model.AlunoTurmaCurso;
import com.sganzerla.model.Alunos;
import com.sganzerla.model.TurmaCurso;
import com.sganzerla.repository.AlunosRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.AlunosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class AlunosServiceImpl extends CrudServiceImpl<Alunos, Long>  implements AlunosService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    AlunosRepository alunosRepository;

    AuthorityRepository authorityRepository;

    @Autowired
    AlunoTurmaCursoServiceImpl alunoTurmaCursoService;

    public AlunosServiceImpl(AlunosRepository alunosRepository, AuthorityRepository authorityRepository) {
        this.alunosRepository = alunosRepository;
        this.authorityRepository = authorityRepository;
    }


    @Override
    protected JpaRepository<Alunos, Long> getRepository() {
        return this.alunosRepository;
    }


    @Override
    public Alunos save(Alunos entity) {
        Alunos aluno = super.save(entity);
        saveAlunoTurmaCurso(aluno);
        return aluno;
    }

    @Override
    public Alunos saveAndFlush(Alunos entity) {
        Alunos aluno = super.saveAndFlush(entity);
        saveAlunoTurmaCurso(aluno);
        return aluno;
    }

    @Override
    public Iterable<Alunos> save(Iterable<Alunos> iterable) {
        Iterable<Alunos> alunos = super.save(iterable);
        for (Alunos aluno : alunos) {
            saveAlunoTurmaCurso(aluno);
        }
        return alunos;
    }


    private void saveAlunoTurmaCurso(Alunos aluno) {
        if(aluno.getLstTurmaCursos() != null){
            for (TurmaCurso turmaCurso : aluno.getLstTurmaCursos()) {
                AlunoTurmaCurso alunoTurmaCurso = new AlunoTurmaCurso();
                alunoTurmaCurso.setAluno(aluno.getId());
                alunoTurmaCurso.setNome(aluno.getNome());
                alunoTurmaCurso.setTurmaCurso(turmaCurso.getId());
                alunoTurmaCursoService.save(alunoTurmaCurso);
            }
        }
    }

}
