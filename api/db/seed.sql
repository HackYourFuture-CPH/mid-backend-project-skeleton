-- seed.sql
INSERT INTO users (email, password) 
VALUES ('admin@eventsapp.com', 'securepassword123');

INSERT INTO events (title, description, price, event_date, location) 
VALUES 
('Tech Summit 2026', 'A gathering of the world''s best developers.', 499.99, '2026-09-10 10:00:00', 'Amsterdam'),
('Jazz in the Park', 'A relaxing evening of live music and food trucks.', 15.00, '2026-05-22 18:30:00', 'Copenhagen'),
('Fullstack Bootcamp Workshop', 'Hands-on training for building modern web apps.', 0.00, '2026-06-01 09:00:00', 'Remote');