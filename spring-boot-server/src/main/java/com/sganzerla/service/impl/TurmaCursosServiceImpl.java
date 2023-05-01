package com.sganzerla.service.impl;

import com.sganzerla.model.TurmaCurso;
import com.sganzerla.repository.TurmaCursosRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.TurmaCursosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

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
}
