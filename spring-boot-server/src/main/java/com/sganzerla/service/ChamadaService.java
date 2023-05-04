package com.sganzerla.service;

import com.sganzerla.model.Chamada;

import java.util.List;

public interface ChamadaService extends CrudService<Chamada, Long>  {

    List<Chamada> findChamadaListByTurma(Long idTurma);
}
