package com.sganzerla.controller;

import com.google.api.client.util.DateTime;
import com.sganzerla.model.AlunoTurmaCurso;
import com.sganzerla.model.Chamada;
import com.sganzerla.service.AlunoTurmaCursoService;
import com.sganzerla.service.ChamadaService;
import com.sganzerla.service.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("chamada")
public class ChamadaController extends CrudController<Chamada, Long> {

    private final ChamadaService chamadaService;
    private final AlunoTurmaCursoService alunoTurmaCursoService;
    @Override
    protected CrudService<Chamada, Long> getService() {
        return this.chamadaService;
    }

    @GetMapping("/getChamadaFromTurma/{turmaId}")
    public Iterable<Chamada> getChamadaFromTurma(@PathVariable("turmaId") Long turmaId) {
        List<AlunoTurmaCurso> alunoTurmaCursoList = alunoTurmaCursoService.findAllByTurmaCurso(turmaId);
        LocalDateTime dataAtual = LocalDateTime.now();
        if(alunoTurmaCursoList.size() == 0) {
            return null;
        }

        List<Chamada> chamadaListByTurma = chamadaService.findChamadaListByTurma(turmaId);

        if(chamadaListByTurma.size() == 0) {

            	for(AlunoTurmaCurso alunoTurmaCurso : alunoTurmaCursoList) {
            		Chamada chamada = new Chamada();
            		chamada.setAlunoturmacurso(alunoTurmaCurso);
                    chamada.setPresenca("Presente");
                    chamada.setData(dataAtual);
            		chamadaService.save(chamada);
            	}
        }
        chamadaListByTurma = chamadaService.findChamadaListByTurma(turmaId);

        if(chamadaListByTurma.size() % alunoTurmaCursoList.size() != 0){
            //verifica qual aluno não está na chamada e adiciona
            for (AlunoTurmaCurso alunoTurmaCurso : alunoTurmaCursoList) {
                if(chamadaListByTurma.stream().noneMatch(chamada -> chamada.getAlunoturmacurso().getAluno().equals(alunoTurmaCurso.getAluno()))){
                    Chamada chamada = new Chamada();
                    chamada.setAlunoturmacurso(alunoTurmaCurso);
                    chamada.setPresenca("Presente");
                    chamada.setData(dataAtual);
                    chamadaService.save(chamada);
                }
            }
        }

        return chamadaService.findChamadaListByTurma(turmaId);
    }

}
