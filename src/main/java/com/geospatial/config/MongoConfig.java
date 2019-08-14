package com.geospatial.config;

import com.mongodb.MongoClient;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.geospacial.repositories")
public class MongoConfig extends AbstractMongoConfiguration {

    static public MongoClient mongoClientInstance = null;
    
    @Override
    protected String getDatabaseName() {
        return "geospatialDatabase";
    }

    @Override 
    public MongoClient mongoClient() {
        return getMongoClientInstance("127.0.0.1");
    }

    @Override
    protected String getMappingBasePackage() {
        return "com.geospatial";
    }

    public static synchronized MongoClient getMongoClientInstance(String host) {
        if (mongoClientInstance == null) {
            mongoClientInstance = new MongoClient(host, 27017);
        }
        return mongoClientInstance;
    }
    
}