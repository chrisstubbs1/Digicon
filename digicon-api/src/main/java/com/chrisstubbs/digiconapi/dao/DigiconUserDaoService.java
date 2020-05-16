package com.chrisstubbs.digiconapi.dao;

import com.chrisstubbs.digiconapi.model.DigiconUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface DigiconUserDaoService extends CrudRepository<DigiconUser, UUID> {

}
