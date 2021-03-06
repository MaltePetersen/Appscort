package de.appscort.backend.api;

import de.appscort.backend.Repository.CustomerRepository;
import de.appscort.backend.Repository.DienstRepository;
import de.appscort.backend.domain.Dienst;
import de.appscort.backend.services.EmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", methods = RequestMethod.OPTIONS )
@RestController
@RequestMapping(path = "api/dienst", produces = "application/json")
public class DienstController {
    private DienstRepository dienstRepository;
    public DienstController(DienstRepository dienstRepository,EmailService emailService, CustomerRepository customerRepository) {
        this.dienstRepository = dienstRepository;
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
