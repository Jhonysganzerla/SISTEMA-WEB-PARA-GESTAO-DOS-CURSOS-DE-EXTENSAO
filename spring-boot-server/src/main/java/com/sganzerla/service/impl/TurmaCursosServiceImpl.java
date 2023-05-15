package com.sganzerla.service.impl;

import com.sganzerla.model.TurmaCurso;
import com.sganzerla.model.Usuario;
import com.sganzerla.repository.TurmaCursosRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.TurmaCursosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TurmaCursosServiceImpl extends CrudServiceImpl<TurmaCurso, Long>  implements TurmaCursosService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    TurmaCursosRepository turmaCursosRepository;

    AuthorityRepository authorityRepository;

    public TurmaCursosServiceImpl(TurmaCursosRepository turmaCursosRepository, AuthorityRepository authorityRepository) {
        this.turmaCursosRepository = turmaCursosRepository;
        this.authorityRepository = authorityRepository;
    }


    @Override
    protected JpaRepository<TurmaCurso, Long> getRepository() {
        return this.turmaCursosRepository;
    }

    @Override
    public List<TurmaCurso> findAllByIdIn(List<Long> idList) {
        return this.turmaCursosRepository.findAllByIdIn(idList);
    }


    @Override
    public List<TurmaCurso> findAll() {
        if (authUserService.checkPermission("ROLE_ADMIN")  || authUserService.checkPermission("ROLE_PROFESSOR")) {
            return super.findAll();
        }

        List<TurmaCurso> turmas = super.findAll();

        return  getTurmaCursosVisiveis(turmas);
    }

    private List<TurmaCurso> getTurmaCursosVisiveis(List<TurmaCurso> turmas) {
        List<TurmaCurso> turmasVisiveis = new ArrayList<>();

        Usuario usuario = authUserService.getUsuarioLogado();

        //verifica se o usuario logado esta presente na equipe da turma
        for (TurmaCurso turma : turmas) {
            List<Usuario> listaDeProfessores = turma.getEquipeCursos().getUsuarios();
            if (listaDeProfessores.contains(usuario)) {
                turmasVisiveis.add(turma);
            }
        }
        return turmasVisiveis;
    }

    @Override
    public List<TurmaCurso> findAll(Sort sort) {
        if (authUserService.checkPermission("ROLE_ADMIN")  || authUserService.checkPermission("ROLE_PROFESSOR")) {
            return super.findAll(sort);
        }

        return getTurmaCursosVisiveis(super.findAll(sort));
    }

    @Override
    public Page<TurmaCurso> findAll(Pageable pageable) {
        if (authUserService.checkPermission("ROLE_ADMIN")  || authUserService.checkPermission("ROLE_PROFESSOR")) {
            return super.findAll(pageable);
        }
        Page<TurmaCurso> all = super.findAll(pageable);
        List<TurmaCurso> turmaCursosVisiveis = getTurmaCursosVisiveis(all.getContent());
        return new PageImpl<>(turmaCursosVisiveis, pageable, all.getTotalElements());
    }
}
