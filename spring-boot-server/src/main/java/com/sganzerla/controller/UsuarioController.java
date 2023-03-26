package com.sganzerla.controller;

import com.sganzerla.model.Usuario;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.UsuariosService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("users")
public class UsuarioController {

    private final UsuariosService usuariosService;


    @GetMapping("{id}")
    public Usuario findOne(@PathVariable Long id) {
        Usuario one = this.usuariosService.findOne(id);
        one.setPassword(null);
        return one;
    }


    @GetMapping
    public List<Usuario> findAll() {
        List<Usuario> usuarioList = this.usuariosService.findAll();
        usuarioList.forEach(usuario -> usuario.setPassword(null));
        return usuarioList;
    }

    @GetMapping("page")
    public Page<Usuario> findAll(
            @RequestParam int page,
            @RequestParam int size,
            @RequestParam(required = false) String order,
            @RequestParam(required = false) Boolean asc){
        PageRequest pageRequest =
                PageRequest.of(page, size);
        if (order != null && asc != null) {
            PageRequest.of(page, size,
                    asc ? Sort.Direction.ASC :
                            Sort.Direction.DESC,
                    order);
        }
        Page<Usuario> usuarioPage =  this.usuariosService.findAll(pageRequest);
        usuarioPage.forEach(usuario -> usuario.setPassword(null));

        return usuarioPage;
    }

    @PostMapping
    public Usuario save(@RequestBody @Valid Usuario entity) {
        return this.usuariosService.save(entity);
    }

    @GetMapping("exists/{id}")
    public boolean exists(@PathVariable Long id) {
        return this.usuariosService.exists(id);
    }

    @GetMapping("count")
    public long count() {
        return this.usuariosService.count();
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        this.usuariosService.delete(id);
    }
}
