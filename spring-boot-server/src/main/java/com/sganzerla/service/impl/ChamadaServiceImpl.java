package com.sganzerla.service.impl;

import com.sganzerla.model.Chamada;
import com.sganzerla.repository.ChamadaRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.ChamadaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import javax.persistence.Transient;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ChamadaServiceImpl extends CrudServiceImpl<Chamada, Long>  implements ChamadaService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    ChamadaRepository chamadaRepository;

    AuthorityRepository authorityRepository;

    public ChamadaServiceImpl(ChamadaRepository chamadaRepository, AuthorityRepository authorityRepository) {
        this.chamadaRepository = chamadaRepository;
        this.authorityRepository = authorityRepository;
    }


    @Override
    protected JpaRepository<Chamada, Long> getRepository() {
        return this.chamadaRepository;
    }

    @Override
    public List<Chamada> findChamadaListByTurma(Long idTurma) {
        return this.chamadaRepository.findAllByAlunoturmacurso_TurmaCurso(idTurma);
    }

    @Override
    @Transient
    public List<Chamada> saveAll(List<Chamada> chamadaList) {
        return this.chamadaRepository.saveAll(chamadaList);
    }

}
