package com.chrisstubbs.digiconapi.controller;

import com.chrisstubbs.digiconapi.model.DigiconUser;
import com.chrisstubbs.digiconapi.service.DigiconUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/digicon-user")
public class DigiconUserController {

    private DigiconUserService digiconUserService;

    @Autowired
    public DigiconUserController(DigiconUserService digiconUserService) {
        this.digiconUserService = digiconUserService;
    }

    //Get All Digicon Users from database/////////////////////////////////////////////////////////////////////
    @GetMapping
    public List<DigiconUser> getAllDigiconUsers() {
        return digiconUserService.getAllDigiconUsers();
    }

    //Get a single Digicon User from hardcoded database/////////////////////////////////////////////////////////////////
    @GetMapping(path = "{id}")
    public DigiconUser getDigiconUserById(@PathVariable UUID id) {
        return digiconUserService.getDigiconUserById(id);
    }

    //Add or Post Digicon User to database//////////////////////////////////////////////////////////////////////////////
    @CrossOrigin
    @PostMapping
    public @ResponseBody DigiconUser addDigiconUser(@RequestBody DigiconUser digiconUserToAdd){
        return digiconUserService.addNewDigiconUser(digiconUserToAdd);
    }

    //Delete Digicon User by ID/////////////////////////////////////////////////////////////////////////////////////////
    @DeleteMapping(path = "{id}")
    public int deleteDigiconUserById(@PathVariable("id") UUID id) {
       return digiconUserService.deleteUserById(id);
    }

    //Update Digicon User by ID/////////////////////////////////////////////////////////////////////////////////////////
    @PutMapping(path = "{id}")
    public int updateDigiconUserById(@PathVariable("id") UUID id, @RequestBody DigiconUser newDigiconUser) {
        return digiconUserService.updatePersonById(id, newDigiconUser);
    }
}
