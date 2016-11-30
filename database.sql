BEGIN;

DROP TABLE IF EXISTS exotic_fruits cascade;

CREATE TABLE exotic_fruits (
  id  SERIAL  PRIMARY KEY NOT NULL,
  name  VARCHAR NOT NULL,
  colour  VARCHAR NOT NULL  DEFAULT 'yellow',
  stone BOOLEAN NOT NULL  DEFAULT TRUE
);

INSERT INTO exotic_fruits (name, colour) VALUES ('avocado', 'green');
INSERT INTO exotic_fruits (name) VALUES ('mango');
INSERT INTO exotic_fruits (name, stone) VALUES ('pineapple', false);
INSERT INTO exotic_fruits (name, colour, stone) VALUES ('coconut', 'brown', false);

SELECT * FROM exotic_fruits;

COMMIT;
