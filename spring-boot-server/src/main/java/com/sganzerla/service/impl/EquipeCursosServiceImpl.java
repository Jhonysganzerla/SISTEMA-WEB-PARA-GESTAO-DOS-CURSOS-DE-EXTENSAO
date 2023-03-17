package com.sganzerla.service.impl;

import com.sganzerla.model.EquipeCursos;
import com.sganzerla.repository.EquipeCursosRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.EquipeCursosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class EquipeCursosServiceImpl extends CrudServiceImpl<EquipeCursos, Long>  implements EquipeCursosService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    EquipeCursosRepository equipeCursosRepository;

    AuthorityRepository authorityRepository;

    public EquipeCursosServiceImpl(EquipeCursosRepository equipeCursosRepository, AuthorityRepository authorityRepository) {
        this.equipeCursosRepository = equipeCursosRepository;
        this.authorityRepository = authorityRepository;
    }


    @Override
    protected JpaRepository<EquipeCursos, Long> getRepository() {
        return this.equipeCursosRepository;
    }
}
