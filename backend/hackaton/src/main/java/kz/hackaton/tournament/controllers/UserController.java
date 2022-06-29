package kz.hackaton.tournament.controllers;

import kz.hackaton.tournament.dto.UserDto;
import kz.hackaton.tournament.entities.User;
import kz.hackaton.tournament.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping
    public UserDto getUser(Principal principal) {
        User user = userRepository.findUserByLogin(principal.getName()).get();
        return new UserDto(user.getLogin(), user.getName(), user.getSurname(), user.getMajor());
    }


}
