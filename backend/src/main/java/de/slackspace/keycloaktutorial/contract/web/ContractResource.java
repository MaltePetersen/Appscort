package de.slackspace.keycloaktutorial.contract.web;

import java.util.ArrayList;
import java.util.List;

import de.slackspace.keycloaktutorial.Repository.ContractorRepository;
import de.slackspace.keycloaktutorial.Repository.CustomerRepository;
import de.slackspace.keycloaktutorial.buisnessDomain.Contractor;
import de.slackspace.keycloaktutorial.buisnessDomain.Customer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import de.slackspace.keycloaktutorial.contract.domain.Contract;
import de.slackspace.keycloaktutorial.security.domain.UserDetails;

@RestController
@RequestMapping(value = "/api/contracts")
public class ContractResource {
    private CustomerRepository customerRepository;
    private ContractorRepository contractorRepository;
    public ContractResource(CustomerRepository customerRepository, ContractorRepository contractorRepository) {
        this.customerRepository = customerRepository;
        this.contractorRepository = contractorRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Contract> getContracts(UserDetails userDetails) {
        Contract a = new Contract("a - called by user: " + createUserAppendix(userDetails));
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
        if(userDetails.getRoles().contains("contractor") && !contractorRepository.existsByEmail(userDetails.getEmail()))
            contractorRepository.save(new Contractor(userDetails.getId(), userDetails.getFirstName(), userDetails.getLastName(), userDetails.getEmail()));
        return userDetails.getFullName() + " (id= " + userDetails.getId() + ")";
    }

}
