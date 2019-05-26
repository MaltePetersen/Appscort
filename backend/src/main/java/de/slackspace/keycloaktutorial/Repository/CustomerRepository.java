package de.slackspace.keycloaktutorial.Repository;

import com.sun.org.apache.xpath.internal.operations.Bool;
import de.slackspace.keycloaktutorial.buisnessDomain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,String>{

    Boolean existsByEmail(String email);


}
