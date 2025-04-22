
---

### **Backend Documentation (`backend.md`)**

```markdown
# Backend Directory Documentation

## Purpose
This directory contains all the backend code for the Spring Boot application. It handles HTTP requests, business logic, and database integration.

## Folder Structure
- **src/**: Contains Java files for controllers, services, models, and repositories.
  - **controllers/**: Contains REST controllers that handle HTTP requests and responses.
  - **services/**: Contains business logic for processing requests.
  - **models/**: Contains data transfer objects (DTOs) and domain models.
  - **repositories/**: Contains interfaces that manage database interactions using Spring Data JPA.

## Key Files
- **pom.xml**: The Maven build file that defines dependencies and build configurations for the Spring Boot application.
- **application.properties**: The configuration file for connecting to the database and setting up application-specific properties.
- **UserController.java**: A REST controller for handling user-related requests like login, registration, etc.
- **UserService.java**: A service class that implements the business logic for managing users.
- **UserRepository.java**: A repository interface for performing database operations related to users.

## Setup Instructions
1. Navigate to the `backend` directory:
   ```bash
   cd backend
