import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { logger } from "hono/logger";


const Server = {
    start: () => {
        const app = new Hono();
        app.use(logger());

        app.get("/", (c) => c.text("Hono!"));

        serve(
            {
                port: 3000,
                fetch: app.fetch,
            },
            (info) => {
                console.log(`Listening on http://localhost:${info.port}`);
            },
        );
    },
};

Server.start();

