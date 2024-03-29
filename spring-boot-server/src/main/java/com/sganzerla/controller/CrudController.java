package com.sganzerla.controller;

import com.sganzerla.service.CrudService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;

public abstract class CrudController <T, ID extends Serializable> {

    protected abstract CrudService<T, ID> getService();

    @GetMapping //(value = {"","/","/all"})
    @ResponseBody
    public List<T> findAll(){
        return getService().findAll();
    }

    @GetMapping("page")
    public Page<T> findAll(
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
        return getService().findAll(pageRequest);
    }

    @GetMapping("{id}")
    public T findOne(@PathVariable ID id) {
        return getService().findOne(id);
    }

    @PostMapping
    public T save(@RequestBody @Validated T entity) {
        return getService().save(entity);
    }

    @GetMapping("exists/{id}")
    public boolean exists(@PathVariable ID id) {
        return getService().exists(id);
    }

    @GetMapping("count")
    public long count() {
        return getService().count();
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable ID id) {
        getService().delete(id);
    }
}
