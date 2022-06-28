drop table if exists users;
drop table if exists tournaments;
drop table if exists users_roles;
drop table if exists roles;

--  todo need to delete
-- create TABLE user_profile
-- (
--     id BIGSERIAL NOT NULL PRIMARY KEY,
--     facts text[],
--     done text[]
-- );


create TABLE users
(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    login VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255)  NOT NULL,
    surname VARCHAR(255)  NOT NULL,
    major VARCHAR(255)  NOT NULL,
    password VARCHAR(255) NOT NULL,
    tournament_id BIGINT,
    user_fact_id BIGINT,
    foreign key (user_fact_id) references user_fact(id)
--     user_profiles_id BIGINT,
--     foreign key (user_profiles_id) references user_profile (id)

);



create table match
(
    id BIGSERIAL NOT NULL primary key,
    tournament_id INTEGER,
    user_id1 BIGINT,
    user_id2 BIGINT,
    winner bigint

);


create table round
(
    id BIGSERIAL NOT NULL primary key,
    tournament_id INTEGER,
    stage int,
    round_id bigint,
    foreign key (round_id) references match (id)


);

create TABLE tournaments
(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    created_date date not null,
    started_date date,
    finished_date date,
    user_id BIGINT,
    tournament_id bigint,
    owner_id bigint,
    foreign key (tournament_id) references round (id)

);

create table roles
(
    id   INTEGER     NOT NULL PRIMARY KEY,
    name VARCHAR(80) not null
);

create table users_roles
(
    user_id bigint not null,
    role_id integer not null,
    primary key (user_id, role_id),
    foreign key (user_id) references users (id),
    foreign key (role_id) references roles (id)

);

create table user_fact
(
     id BIGSERIAL not null primary key,
     fact VARCHAR(255) not null ,
     learned_material varchar(255),
     id_of_feedbacker bigint not null
);
