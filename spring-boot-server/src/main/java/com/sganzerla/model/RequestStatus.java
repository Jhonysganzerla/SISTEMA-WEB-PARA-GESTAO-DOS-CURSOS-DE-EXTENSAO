package com.sganzerla.model;

public enum RequestStatus {

    IN_ANALYSIS("Em Análise"),
    INCOMPLETE("Incompleta"),
    APPROVED("Aprovada"),
    DENIED("Negada");

    private String description;

    RequestStatus (String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
