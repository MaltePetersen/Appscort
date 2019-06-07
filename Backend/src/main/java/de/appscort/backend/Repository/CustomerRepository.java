package de.appscort.backend.Repository;

import de.appscort.backend.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,String>{

    Boolean existsByEmail(String email);


}
