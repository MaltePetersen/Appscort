package de.slackspace.keycloaktutorial.buisnessDomain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer {
    @Id
    private String id;
    private String firstName;
    private String secondName;
    private String email;

    public Customer() {

    }

    public Customer(String id, String firstName, String secondName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
    }
}
