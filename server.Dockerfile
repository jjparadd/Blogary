FROM openjdk:15
COPY target/Blogary-1.0.jar /usr/src/
WORKDIR /usr/src/
CMD ["java", "-jar", "Blogary-1.0.jar"]