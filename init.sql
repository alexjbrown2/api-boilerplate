  CREATE TABLE names (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL
  );
  
  INSERT INTO names (name, age)
  VALUES  ('Alex Brown', 30);