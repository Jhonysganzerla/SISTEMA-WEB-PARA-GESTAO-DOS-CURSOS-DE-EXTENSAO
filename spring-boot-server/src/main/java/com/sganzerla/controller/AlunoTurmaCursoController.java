package com.sganzerla.controller;

import com.sganzerla.model.AlunoTurmaCurso;
import com.sganzerla.model.TurmaCurso;
import com.sganzerla.service.AlunoTurmaCursoService;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.TurmaCursosService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequiredArgsConstructor
@RequestMapping("alunoturmacurso")
public class AlunoTurmaCursoController extends CrudController<AlunoTurmaCurso, Long> {

    private final AlunoTurmaCursoService alunoTurmaCursoService;
    private final TurmaCursosService turmaCursosService;
    @Override
    protected CrudService<AlunoTurmaCurso, Long> getService() {
        return this.alunoTurmaCursoService;
    }

    @GetMapping("/getTurmasAluno/{id}")
    public Iterable<TurmaCurso> getTurmasAluno(@PathVariable("id") Long id) {
        List<Long> idsTurmas = alunoTurmaCursoService.findAllByAluno_Id(id).stream().map(AlunoTurmaCurso::getTurmaCurso).collect(Collectors.toList());
        return turmaCursosService.findAllByIdIn(idsTurmas);
    }


}
