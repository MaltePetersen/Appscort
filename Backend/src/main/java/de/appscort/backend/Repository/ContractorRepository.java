package de.appscort.backend.Repository;

import de.appscort.backend.domain.Contractor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractorRepository extends JpaRepository<Contractor, String> {
    Boolean existsByEmail(String email);

}
