package com.sganzerla.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class HomeDto {
    private Long turmas;
    private Long cursos;
    private Long alunos;
    private Long instrutores;
}
