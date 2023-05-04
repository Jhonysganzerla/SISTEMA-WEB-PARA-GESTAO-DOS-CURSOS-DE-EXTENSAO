package com.sganzerla.model;

import com.google.api.client.util.DateTime;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
@Data
public class Chamada {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime data;

    private String presenca; //Presente Ausente Feriado Cancelado

    @Size(max = 50, message = "O tamanho do conteudo ministrado deve no máximo {max} caracteres")
    private String conteudoministrado;


    @NotNull(message = "O aluno deve ser preenchido")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "alunoturmacurso_id", referencedColumnName = "id")
    private AlunoTurmaCurso alunoturmacurso;


}

