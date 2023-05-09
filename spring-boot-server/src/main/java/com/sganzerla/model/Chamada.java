package com.sganzerla.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.google.api.client.util.DateTime;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
public class Chamada {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate data;

    private String presenca; //Presente Ausente Feriado Cancelado

    @Size(max = 50, message = "O tamanho do conteudo ministrado deve no máximo {max} caracteres")
    private String conteudoministrado;


    @NotNull(message = "O aluno deve ser preenchido")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "alunoturmacurso_id", referencedColumnName = "id")
    private AlunoTurmaCurso alunoturmacurso;


}

