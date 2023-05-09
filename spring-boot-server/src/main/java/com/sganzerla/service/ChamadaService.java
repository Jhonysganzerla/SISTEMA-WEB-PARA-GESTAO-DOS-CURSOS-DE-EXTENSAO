package com.sganzerla.service;

import com.sganzerla.model.Chamada;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ChamadaService extends CrudService<Chamada, Long>  {

    List<Chamada> findChamadaListByTurma(Long idTurma);

    List<Chamada> saveAll(List<Chamada> chamadaList);

}
