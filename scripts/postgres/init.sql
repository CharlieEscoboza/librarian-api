-- Create database
CREATE DATABASE librarian_api;

-- Move to librarian_api database
\c librarian_api;

-- Create authors table
CREATE TABLE authors (
  id SERIAL,
  name TEXT NOT NULL,
  last_name TEXT,
  image TEXT,
  address TEXT,
  city TEXT,
  country TEXT,
  PRIMARY KEY (id)
);

-- Create editorials table
CREATE TABLE editorials (
  id SERIAL,
  name TEXT NOT NULL,
  image TEXT,
  address TEXT,
  city TEXT,
  country TEXT,
  PRIMARY KEY (id)
);

-- Create languages table
CREATE TABLE languages (
  id SERIAL,
  name TEXT NOT NULL,
  PRIMARY KEY (id)
);

-- Create cateogries table
CREATE TABLE cateogries (
  id SERIAL,
  name TEXT NOT NULL,
  PRIMARY KEY (id)
);

-- Create books table
CREATE TABLE books (
  id SERIAL,
  name TEXT NOT NULL,
  image TEXT,
  language_ids INT[],
  category_ids INT[],
  editorial_id INT REFERENCES editorials(id),
  author_ids INT[],
  PRIMARY KEY (id)
);
