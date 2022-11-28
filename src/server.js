import express from "express";
import { render } from "mjml-react";

import * as email1 from "./email";

const port = 3000;
const app = express();

app.get("*", (req, res) => {
  const { html } = render(email1.generate(), { validationLevel: "soft" });
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
