package de.slackspace.keycloaktutorial.Repository;

import de.slackspace.keycloaktutorial.buisnessDomain.Dienst;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DienstRepository extends JpaRepository<Dienst,Long> {
}
