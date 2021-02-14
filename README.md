# weather-service


git clone https://github.com/MianMahroz/weather-service.git


#Backend End Instructions

cd weather-service

cd weather-service-backend

mvnw spring-boot:run

http://localhost:8094

http://localhost:8094/swagger-ui.html#/weather-controller




#Front End Instructions

cd weather-service

cd weather-service-frontend

npm install

ng serve

http://localhost:4200/



#use below property to adjust cache time

spring.cache.caffeine.spec=expireAfterAccess=2h
