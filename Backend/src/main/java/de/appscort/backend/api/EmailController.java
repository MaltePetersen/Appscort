package de.appscort.backend.api;

import de.appscort.backend.domain.EmailContent;
import de.appscort.backend.services.EmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/email", produces = "application/json")
public class EmailController {
    private EmailService emailService;
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping(consumes = "application/json")
    public ResponseEntity<?> post(@RequestBody EmailContent emailContent) {
        emailService.sendMail(emailContent.getToEmail(),emailContent.getSubject(),emailContent.getMessage());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


}
