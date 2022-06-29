package kz.hackaton.tournament.controllers;


import kz.hackaton.tournament.responses.ResponseMessage;
import kz.hackaton.tournament.services.TournamentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final TournamentService tournamentService;

    @DeleteMapping("/delete/{id}")
    //@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ResponseMessage> deleteTournament(@PathVariable Long id) {
        tournamentService.deleteTournament(id);
        return new ResponseEntity<>(ResponseMessage.builder().statusCode(200).message("Successfully deleted").build(), HttpStatus.OK);
    }

}
