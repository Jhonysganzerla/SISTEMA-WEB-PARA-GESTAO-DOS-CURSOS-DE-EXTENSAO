package com.sganzerla.controller;

import com.sganzerla.model.HomeDto;
import com.sganzerla.model.TipoCursos;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.HomeService;
import com.sganzerla.service.TipoCursosService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("home")
public class HomeController {

    private final HomeService homeService;

    @GetMapping
    public HomeDto getHome() {
        return homeService.getHome();
    }

}
