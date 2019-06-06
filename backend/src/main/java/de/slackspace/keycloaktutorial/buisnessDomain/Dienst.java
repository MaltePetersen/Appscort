package de.slackspace.keycloaktutorial.buisnessDomain;

import javax.persistence.*;
import java.util.List;

@Entity
public class Dienst {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String inhalt;
    private String heading;

    public Dienst(String inhalt, String heading) {
        this.inhalt = inhalt;
        this.heading = heading;
    }

    public Dienst() {
    }

    public Dienst(String inhalt, Long id) {
        this.id = id;
        this.inhalt = inhalt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInhalt() {
        return inhalt;
    }

    public void setInhalt(String inhalt) {
        this.inhalt = inhalt;
    }

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }
}
