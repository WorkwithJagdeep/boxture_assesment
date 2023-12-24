const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  let userId;
  test("Get all records with a GET api/users request (an empty array is expected)", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body.data).toEqual([]);
  });
  test("A new object is created by a POST api/users request", async () => {
    let newUser = {
      username: "hera",
      age: 15,
    };
    const response = await request(app).post("/api/users").send(newUser);
    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBe("success");
    userId = response.body.data.id;
  });
  test("With a GET api/user/{userId} request, we try to get the created record by its id", async () => {
    const response = await request(app).get(`/api/users/${userId}`);
    expect(response.statusCode).toBe(200);
  });
  test("We try to update the created record with a PUT api/users/{userId}request", async () => {
    let updateData = {
      username: "new user",
      age: 20,
      hobbies: [],
    };
    const response = await request(app)
      .put(`/api/users/${userId}`)
      .send(updateData);

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("success");
  });
  test("With a DELETE api/users/{userId} request, we delete the created object by id", async () => {
    const response = await request(app).delete(`/api/users/${userId}`);
    expect(response.statusCode).toBe(204);
  });
  test("Try to get the deleted user by its id with a GET api/users/{userId} request", async () => {
    const response = await request(app).get(`/api/users/${userId}`);
    expect(response.statusCode).toBe(404);
    expect(response.body.status).toBe("failed");
  });
});
