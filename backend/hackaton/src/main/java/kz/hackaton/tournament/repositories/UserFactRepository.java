package kz.hackaton.tournament.repositories;

import kz.hackaton.tournament.entities.UserFact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserFactRepository extends JpaRepository<UserFact, Long> {

}
