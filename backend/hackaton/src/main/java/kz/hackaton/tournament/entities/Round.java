package kz.hackaton.tournament.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "round")
@Getter
@Setter
public class Round {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "stage")
    private Integer stage;

    @OneToMany
    @JoinColumn(name = "round_id")
    private List<Match> matchList;

    public void test() {
        System.out.println("Rakhim");
    }





}
