import { render } from "mjml-react";
import fs from "fs";

import { generate } from "./email";

const { html } = render(generate(), { validationLevel: "soft" });
fs.writeFileSync("output.html", html);
console.log(html);
