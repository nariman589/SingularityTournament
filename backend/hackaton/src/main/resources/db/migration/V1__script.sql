create TABLE users
(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    tournament_id INTEGER NOT NULL
--     FOREIGN KEY (tournament_id) REFERENCES tournaments (id)
);

create TABLE tournaments
(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

ALTER TABLE users
    ADD CONSTRAINT fk_users FOREIGN KEY (tournament_id) REFERENCES tournaments (id);


create table tournaments_users
(
    tournament_id bigint not null,
    user_id integer not null,
    primary key (tournament_id, user_id),
    foreign key (tournament_id) references tournaments (id),
    foreign key (user_id) references users (id)

);