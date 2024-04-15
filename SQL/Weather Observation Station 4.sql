-- Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
-- The STATION table is described as follows:

-- Create the table
CREATE TABLE station (
  id INT,
  city VARCHAR(21),
  state CHAR(2),
  lat_n DECIMAL(10, 8),
  long_w DECIMAL(11, 8)
);

-- where LAT_N is the northern latitude and LONG_W is the western longitude.

-- For example, if there are three records in the table with CITY values 'New York', 'New York', 'Bengalaru', there are 2 different city names: 'New York' and 'Bengalaru'. The query returns 1, because total number of records - number of unique city names = 3 - 2 = 1.

-- Solution:

-- Seed the table
INSERT INTO station (id, city, state, lat_n, long_w) 
VALUES 
  (1, 'New York', 'NY', 40.71, 74.01),
  (2, 'New York', 'NY', 40.71, 74.01),
  (3, 'Bengalaru', 'KA', 12.97, 77.59);

-- Query the table
SELECT COUNT(*) - COUNT(DISTINCT city) FROM station;