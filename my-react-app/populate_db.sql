CREATE TABLE IF NOT EXISTS cars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL
);

INSERT INTO cars (brand, model, year) VALUES ('Ford', 'Mustang', 1960);
INSERT INTO cars (brand, model, year) VALUES ('VW', 'Golf', 2000);
INSERT INTO cars (brand, model, year) VALUES ('Opel', 'Corsa', 2010);
INSERT INTO cars (brand, model, year) VALUES ('BMW', 'X5', 2015);