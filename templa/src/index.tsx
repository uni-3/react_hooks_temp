// reactのpackage import
import React from "https://dev.jspm.io/react";
import ReactDOMServer from "https://dev.jspm.io/react-dom/server";
import { createApp } from "https://servestjs.org/@v1.0.0/mod.ts";
import { ServerRequest } from "https://servestjs.org/@v1.0.0/server.ts";

import App from "./App.tsx";

const app = createApp();

app.handle("/", async (req: ServerRequest) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8",
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <title>deno react ssr</title>
        </head>
        <body id="root">
          <App />
        </body>
      </html>,
    ),
  });
});

app.listen({ port: 8000 });
