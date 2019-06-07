package de.slackspace.keycloaktutorial.contract.web;

import de.slackspace.keycloaktutorial.Repository.CustomerRepository;
import de.slackspace.keycloaktutorial.Repository.DienstRepository;
import de.slackspace.keycloaktutorial.buisnessDomain.Dienst;
import de.slackspace.keycloaktutorial.mail.EmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", methods = RequestMethod.OPTIONS )
@RestController
@RequestMapping(path = "api/dienst", produces = "application/json")
public class DienstController {
    private DienstRepository dienstRepository;
    private CustomerRepository customerRepository;
    private EmailService emailService;
    public DienstController(DienstRepository dienstRepository,EmailService emailService, CustomerRepository customerRepository) {
        this.dienstRepository = dienstRepository;
        this.customerRepository = customerRepository;
        this.emailService = emailService;
    }

    @GetMapping("/all")
    public List<Dienst> getAll() {
        return dienstRepository.findAll();
    }
    @PostMapping(consumes = "application/json")
    public ResponseEntity<?> post(@RequestBody Dienst dienst) {
        dienstRepository.save(dienst);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @RequestMapping(method = RequestMethod.OPTIONS)
    public ResponseEntity handle() {
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
