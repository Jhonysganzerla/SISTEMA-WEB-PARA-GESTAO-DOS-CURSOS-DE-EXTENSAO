package com.sganzerla.service.impl;

import com.sganzerla.model.Habilidades;
import com.sganzerla.model.HomeDto;
import com.sganzerla.repository.*;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.HabilidadesService;
import com.sganzerla.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class HomeServiceImpl implements HomeService {

    @Autowired
    AlunosRepository alunosRepository;

    @Autowired
    CursosRepository cursosRepository;

    @Autowired
    TurmaCursosRepository turmaCursosRepository;

    @Autowired
    UsuariosRepository usuariosRepository;

    @Override
    public HomeDto getHome() {
        HomeDto homeDto = HomeDto.builder()
                .alunos(0L)
                .cursos(0L)
                .turmas(0L)
                .instrutores(0L)
                .build();

        homeDto.setAlunos(alunosRepository.count());
        homeDto.setInstrutores(usuariosRepository.countUsuarioByTipo("instrutor"));
        homeDto.setTurmas(turmaCursosRepository.count());
        homeDto.setCursos(turmaCursosRepository.countTurmaCursoByDataFimAfter(new Date()));

        return homeDto;
    }
}
