package kz.hackaton.tournament.services;

import kz.hackaton.tournament.entities.UserFact;
import kz.hackaton.tournament.repositories.UserFactRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Getter
@Setter
public class UserFactService {

    private final UserFactRepository userFactRepository;

    public void save(UserFact userFact) {
        userFactRepository.save(userFact);
    }

}
