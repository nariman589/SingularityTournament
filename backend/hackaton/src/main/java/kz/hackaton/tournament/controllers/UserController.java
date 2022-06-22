package kz.hackaton.tournament.controllers;

import kz.hackaton.tournament.responses.ResponseMessage;
import kz.hackaton.tournament.services.AuthServices;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class UserController {
        private final AuthServices authServices;
    @PostMapping
    public ResponseEntity<ResponseMessage> registration(@RequestBody UserDTO userDTO) {
            return null;
    }


}
