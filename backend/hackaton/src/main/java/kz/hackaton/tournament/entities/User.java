package kz.hackaton.tournament.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "login")
    private String login;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "major")
    private String major;

    @Column(name = "password")
    private String password;

    @ManyToMany()
    @JoinTable(name = "tournaments_users",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "tournament_id"))
    private Collection<Tournament> tournaments;

    @ManyToMany
    @JoinTable(name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Collection<Role> roles;

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "user_profiles_id", referencedColumnName = "id")
//    private UserProfile userProfile;

    @OneToMany
    @JoinColumn(name = "user_fact_id")
    private List<UserFact> userFacts = new ArrayList<>();



}
