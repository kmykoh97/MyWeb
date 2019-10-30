# Start with a base image containing Java runtime
FROM openjdk:8-jdk-alpine

# Add Maintainer Info
LABEL maintainer="kmykoh97@gmail.com"

# Add a volume pointing to /tmp
VOLUME /tmp

# Make port available to the world outside this container
EXPOSE 30000

# The application's jar file
ARG JAR_FILE=target/user-0.0.1-SNAPSHOT.jar

# Add the application's jar to the container
ADD ${JAR_FILE} user.jar

# Run the jar file
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/user.jar"]