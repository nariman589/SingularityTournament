package kz.hackaton.tournament.controllers;

import kz.hackaton.tournament.dto.UserDto;
import kz.hackaton.tournament.dto.UserFullDto;
import kz.hackaton.tournament.entities.User;
import kz.hackaton.tournament.repositories.UserRepository;
import kz.hackaton.tournament.services.RoundService;
import kz.hackaton.tournament.services.TournamentService;
import kz.hackaton.tournament.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final RoundService roundService;

    @GetMapping
    public UserDto getUser(Principal principal) {
        User user = userService.findUserByLogin(principal.getName());
        return new UserDto(user.getLogin(), user.getName(), user.getSurname(), user.getMajor());
    }

    @GetMapping("/{id}")
    public UserFullDto getFullInfo(@PathVariable Long id) {
        return userService.userInfo(id);

    }







}
