package com.sganzerla.controller;

import com.sganzerla.model.AlunoTurmaCurso;
import com.sganzerla.model.Alunos;
import com.sganzerla.model.TurmaCurso;
import com.sganzerla.service.AlunoTurmaCursoService;
import com.sganzerla.service.AlunosService;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.TurmaCursosService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.websocket.server.PathParam;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequiredArgsConstructor
@RequestMapping("alunoturmacurso")
public class AlunoTurmaCursoController extends CrudController<AlunoTurmaCurso, Long> {

    private final AlunoTurmaCursoService alunoTurmaCursoService;
    private final TurmaCursosService turmaCursosService;
    private final AlunosService alunosService;
    @Override
    protected CrudService<AlunoTurmaCurso, Long> getService() {
        return this.alunoTurmaCursoService;
    }

    @GetMapping("/getTurmasAluno/{id}")
    public Iterable<TurmaCurso> getTurmasAluno(@PathVariable("id") Long id) {
        List<Long> idsTurmas = alunoTurmaCursoService.findAllByAluno(id).stream().map(AlunoTurmaCurso::getTurmaCurso).collect(Collectors.toList());
        return turmaCursosService.findAllByIdIn(idsTurmas);
    }

    @DeleteMapping("/deleteByAlunoAndTurma/{idAluno}/{idTurma}")
    @Transactional
    public void deleteByAlunoAndTurma(@PathVariable("idAluno") Long idAluno, @PathVariable("idTurma") Long idTurma) {
        alunoTurmaCursoService.deleteByAlunoAndTurma(idAluno, idTurma);
    }



}
