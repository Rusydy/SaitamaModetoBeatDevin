-- Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.

-- Sample Input
  -- For example, CITY has four entries: DEF, ABC, PQRS and WXY.

-- Sample Output
  -- ABC 3
  -- PQRS 4

-- Explanation
  -- When ordered alphabetically, the CITY names are listed as ABC, DEF, PQRS, and WXY, with lengths  and . The longest name is PQRS, but there are  options for shortest named city. Choose ABC, because it comes first alphabetically.

-- Note
  -- You can write two separate queries to get the desired output. It need not be a single query.

-- preparation

-- Create the table
CREATE TABLE stations (
  id INT,
  city VARCHAR(21),
  state CHAR(2),
  lat_n DECIMAL(10, 8),
  long_w DECIMAL(11, 8)
);

-- Seed the table
INSERT INTO stations (id, city, state, lat_n, long_w) 
VALUES 
  (1, 'New York', 'NY', 40.71, 74.01),
  (2, 'New York', 'NY', 40.71, 74.01),
  (3, 'Bengalaru', 'KA', 12.97, 77.59),
  (4, 'Tipton', 'IN', 40.33, 86.05),
  (5, 'Highwood', 'IL', 42.20, 87.80),
  (6, 'Beverly Hills', 'CA', 34.09, 118.41),
  (7, 'Hollywood', 'CA', 34.09, 118.34),
  (8, 'Chicago', 'IL', 41.88, 87.63),
  (9, 'San Francisco', 'CA', 37.77, 122.41),
  (10, 'Seattle', 'WA', 47.61, 122.33),
  (11, 'Portland', 'OR', 45.52, 122.68),
  (12, 'Denver', 'CO', 39.74, 104.98),
  (13, 'Miami', 'FL', 25.77, 80.19),
  (14, 'Dallas', 'TX', 32.78, 96.80),
  (15, 'Houston', 'TX', 29.76, 95.37),
  (16, 'Phoenix', 'AZ', 33.45, 112.07),
  (17, 'Las Vegas', 'NV', 36.17, 115.14),
  (18, 'Los Angeles', 'CA', 34.05, 118.24),
  (19, 'San Diego', 'CA', 32.72, 117.16),
  (20, 'San Jose', 'CA', 37.34, 121.89),
  (21, 'Sacramento', 'CA', 38.58, 121.49),
  (22, 'Portland', 'ME', 43.66, 70.25),
  (23, 'Boston', 'MA', 42.36, 71.06),
  (24, 'New York', 'NY', 40.71, 74.01),
  (25, 'Philadelphia', 'PA', 39.95, 75.16),
  (26, 'Baltimore', 'MD', 39.29, 76.61),
  (27, 'Washington', 'DC', 38.91, 77.04),
  (28, 'Richmond', 'VA', 37.54, 77.46);

-- solution v1

WITH shortest_city AS (
  SELECT city, LENGTH(city) AS city_length
  FROM stations
  ORDER BY city_length ASC, city ASC
  LIMIT 1
), longest_city AS (
  SELECT city, LENGTH(city) AS city_length
  FROM stations
  ORDER BY city_length DESC, city ASC
  LIMIT 1
) SELECT city, city_length FROM shortest_city
  UNION
  SELECT city, city_length FROM longest_city;

-- solution v2

WITH ranked_cities AS (
  SELECT 
    city, 
    LENGTH(city) AS city_length,
    ROW_NUMBER() OVER (ORDER BY LENGTH(city) ASC, city ASC) AS shortest_rank,
    ROW_NUMBER() OVER (ORDER BY LENGTH(city) DESC, city ASC) AS longest_rank
  FROM stations
)
SELECT city, city_length
FROM ranked_cities
WHERE shortest_rank = 1 OR longest_rank = 1;
