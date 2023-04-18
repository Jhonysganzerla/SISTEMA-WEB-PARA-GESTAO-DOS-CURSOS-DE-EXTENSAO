package com.sganzerla.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.api.client.util.DateTime;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Date;
import java.sql.Time;
import java.time.Duration;

@Entity
@Data
public class TurmaCursos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date dataInicio;
    private Date dataFim;
    private String horaInicio;
    private String cargaHoraria;
    private String duracao;
    private String diaSemana;
    @Size(max = 50, message = "O tamanho do local deve no máximo {max} caracteres")
    private String local;
    @Size(max = 50, message = "O tamanho da sala deve no máximo {max} caracteres")
    private String sala;
    @Size(max = 100, message = "O tamanho do local deve no máximo {max} caracteres")
    private String requisitos;

    @NotNull(message = "A equipe deve ser preenchida")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "equipecursos_id", referencedColumnName = "id")
    private EquipeCursos equipeCursos;

    @NotNull(message = "O curso deve ser preenchido")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cursos_id", referencedColumnName = "id")
    private Cursos cursos;

}

