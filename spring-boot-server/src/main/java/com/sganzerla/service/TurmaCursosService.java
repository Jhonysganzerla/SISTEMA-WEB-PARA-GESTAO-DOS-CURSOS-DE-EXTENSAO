package com.sganzerla.service;

import com.sganzerla.model.TurmaCurso;

import java.util.List;

public interface TurmaCursosService extends CrudService<TurmaCurso, Long>  {

    List<TurmaCurso> findAllByIdIn(List<Long> idList);
}
