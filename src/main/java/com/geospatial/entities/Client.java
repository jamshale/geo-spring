package com.geospatial.entities;

import org.springframework.data.annotation.Id;

public class Client {

    @Id
    public String id;

    public String userName;

    public String password;





    // Constructors
    public Client() {}

    public Client(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    // Functions
    public String getId() {
    	return this.id;
    }
    public void setId(String id) {
    	this.id = id;
    }
    public String getUserName() {
        return this.userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getPassword() {
        return this.password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return String.format(userName);
    }

}