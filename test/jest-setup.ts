import { SetupServer } from "@src/server";
import supertest from "supertest";

// Will be runned before all tests of application, beginning the app
beforeAll(() => {
    const server = new SetupServer();
    server.init();
    global.testRequest = supertest(server.getApp());
});
