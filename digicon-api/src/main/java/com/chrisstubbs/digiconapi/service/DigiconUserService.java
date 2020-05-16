package com.chrisstubbs.digiconapi.service;

import com.chrisstubbs.digiconapi.dao.DigiconUserDaoService;
import com.chrisstubbs.digiconapi.model.DigiconUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DigiconUserService {

    //Dependency Injection//////////////////////////////////////////////////////////////////////////////////////////////
    private DigiconUserDaoService digiconUserDaoService;

    @Autowired
    public DigiconUserService(DigiconUserDaoService digiconUserDaoService) {
        this.digiconUserDaoService = digiconUserDaoService;
    }

    //get all users/////////////////////////////////////////////////////////////////////////////////////////////////////
    public List<DigiconUser> getAllDigiconUsers(){
        List<DigiconUser> digiconUsers = new ArrayList<>();
        digiconUserDaoService.findAll()
                .forEach(digiconUsers::add);
        return digiconUsers;
    }

    //get a single user by id///////////////////////////////////////////////////////////////////////////////////////////
    public DigiconUser getDigiconUserById(UUID id) {
        return digiconUserDaoService.findById(id).get();
    }

    //add a new digicon user////////////////////////////////////////////////////////////////////////////////////////////
    public DigiconUser addNewDigiconUser(DigiconUser digiconUserToAdd) {
        return digiconUserDaoService.save(digiconUserToAdd);
    }

    //delete user by id/////////////////////////////////////////////////////////////////////////////////////////////////
    public int deleteUserById(UUID id) {
       digiconUserDaoService.deleteById(id);
       return 1;
    }

    //update person by id///////////////////////////////////////////////////////////////////////////////////////////////
    public int updatePersonById(UUID id, DigiconUser newDigiconUser) {
        digiconUserDaoService.save(newDigiconUser);
        return 1;
    }
}
