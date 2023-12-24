# Node.js API Implementation

This Node.js application provides a simple API for managing user records. Users are stored as objects with unique identifiers, usernames, ages, and hobbies. The API supports CRUD operations for user management and follows RESTful principles.

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set the desired port in the `.env` file.
4. Run the application using `npm start`
5. run the test case use `npm test`


## Implementation Details

### 1. Endpoints

- **GET /api/users**
  - Retrieve all users.
  - **Response:** Status code 200 and a list of all user records.

- **GET /api/users/{userId}**
  - Retrieve a user by ID.
  - **Response:**
    - Status code 200 and the user record with the specified ID.
    - Status code 400 if the provided userID is invalid (not a UUID).
    - Status code 404 if no user record exists with the specified ID.

- **POST /api/users**
  - Create a new user record.
  - **Request Body:** JSON object with properties `username`, `age`, and optional `hobbies`.
  - **Response:**
    - Status code 201 and the newly created user record.
    - Status code 400 if the request body is missing required fields.

- **PUT /api/users/{userId}**
  - Update an existing user record by ID.
  - **Request Body:** JSON object with properties `username`, `age`, and optional `hobbies`.
  - **Response:**
    - Status code 200 and the updated user record.
    - Status code 400 if the provided userID is invalid (not a UUID).
    - Status code 404 if no user record exists with the specified ID.

- **DELETE /api/users/{userId}**
  - Delete an existing user record by ID.
  - **Response:**
    - Status code 204 if the record is found and deleted.
    - Status code 400 if the provided userID is invalid (not a UUID).
    - Status code 404 if no user record exists with the specified ID.

### 2. User Properties

Users are stored as objects with the following properties:

- `id`: Unique identifier (string, UUID) generated on the server side.
- `username`: User's name (string, required).
- `age`: User's age (number, required).
- `hobbies`: User's hobbies (array of strings or empty array, required).

### 3. Handling Non-existing Endpoints

Requests to non-existing endpoints (e.g., `some-non/existing/resource`) are handled with a response of status code 404 and a corresponding human-friendly message.

### 4. Handling Server-side Errors

Errors on the server side that occur during the processing of a request are handled appropriately. The server responds with a status code 500 and a corresponding human-friendly message.

### 5. Port Configuration

The value of the port on which the application is running is stored in a `.env` file. Make sure to set the desired port in the `.env` file.


Feel free to explore and test the API using the provided endpoints for user management.

For any issues or questions, please refer to the [documentation](#) or contact the project maintainers.

## Test Scenarios

1. **Get all records with a GET /api/users request**
   - Expected: An empty array in the response.

2. **Create a new object with a POST /api/users request**
   - Expected: A response containing the newly created record.

3. **Get the created record by its ID with a GET /api/users/{userId} request**
   - Expected: The created record in the response.

4. **Update the created record with a PUT /api/users/{userId} request**
   - Expected: A response containing an updated object with the same ID.

5. **Delete the created object by ID with a DELETE /api/users/{userId} request**
   - Expected: Confirmation of successful deletion.

6. **Get a deleted object by ID with a GET /api/users/{userId} request**
   - Expected: There is no such object in the response.

