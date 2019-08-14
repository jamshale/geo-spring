package com.geospatial.repositories;


import com.geospatial.entities.Client;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClientRepo extends MongoRepository<Client, String> {



    
}