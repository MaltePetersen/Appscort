package de.appscort.backend.api;

import java.util.ArrayList;
import java.util.List;

import de.appscort.backend.Repository.CustomerRepository;
import de.appscort.backend.domain.Customer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import de.appscort.backend.domain.Contract;
import de.appscort.backend.security.UserDetails;

@RestController
@RequestMapping(value = "/api/contracts")
public class ContractResource {
    private CustomerRepository customerRepository;
    public ContractResource(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Contract> getContracts(UserDetails userDetails) {
        Contract a = new Contract( userDetails.getFirstName());
        Contract b = new Contract("b - called by user: " + createUserAppendix(userDetails));

        List<Contract> contracts = new ArrayList<>();
        contracts.add(a);
        contracts.add(b);

        return contracts;
    }

    private String createUserAppendix(UserDetails userDetails) {
        if (userDetails.getRoles().contains("customer") && !customerRepository.existsByEmail(userDetails.getEmail())) {
            customerRepository.save(new Customer(userDetails.getId(), userDetails.getFirstName(), userDetails.getLastName(), userDetails.getEmail()));
        }
          return userDetails.getFullName() + " (id= " + userDetails.getId() + ")";
    }

}
