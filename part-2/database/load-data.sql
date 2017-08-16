\COPY guests(id,name,email) FROM './database/guests.csv' DELIMITER ',' CSV HEADER;
\COPY rooms(id,number,capacity) FROM './database/rooms.csv' DELIMITER ',' CSV HEADER;
\COPY bookings(id,room_id,guest_id,check_in,check_out) FROM './database/bookings.csv' DELIMITER ',' CSV HEADER;