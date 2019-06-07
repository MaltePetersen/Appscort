package de.appscort.backend.Repository;

import de.appscort.backend.domain.Dienst;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DienstRepository extends JpaRepository<Dienst,Long> {
}
