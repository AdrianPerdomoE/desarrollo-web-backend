

CREATE TABLE public.users (
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	id varchar NOT NULL,
	"name" varchar NOT NULL,
	rol int4 NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);


-- public.users foreign keys

ALTER TABLE public.users ADD CONSTRAINT users_fk FOREIGN KEY (rol) REFERENCES roles(id) ON UPDATE RESTRICT ON DELETE RESTRICT;



CREATE TABLE public.roles (
	id int4 NOT NULL,
	"name" varchar NOT NULL,
	description text NULL,
	CONSTRAINT roles_pk PRIMARY KEY (id)
);
