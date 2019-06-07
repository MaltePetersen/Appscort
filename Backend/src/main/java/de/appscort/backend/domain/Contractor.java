package de.appscort.backend.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Contractor  {
    @Id
    private String id;
    private String firstName;
    private String secondName;
    private String email;
    private String Services;
    private String Bild;

    public Contractor(String id, String firstName, String secondName, String email, String services, String bild) {
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        Services = services;
        Bild = bild;
    }

    public Contractor(String id, String firstName, String secondName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
    }

    public Contractor() {
    }
}
