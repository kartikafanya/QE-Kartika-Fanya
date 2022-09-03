const DATABASE_URL =
  "postgres://jmhievtcwiomiv:520b213f3b0e6b08f468be243be18f3141ca5d65266a6ab1fc169a52eb58d1ef@ec2-34-227-120-79.compute-1.amazone-1.amazonaws.com:5432/dahemuarg642hk";

const config = new URL(DATABASE_URL);

const database = {
  protocol: config.protocol,
  username: config.username,
  password: config.password,
  path: config.pathname,
};
// console.log("protocol", config.protocol);
// console.log("username", config.username);
// console.log("password", config.password);
// console.log("path", config.pathname);
// console.log("hostname", config.hostname);

// const express = require("express");
// const app = express();
// const { PORT = 8000 } = process.env;
// const cors = require("cors");

// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Penambahan Fitur");
// });

// app.listen(PORT, () => {
//   console.log(`Express running on port ${PORT}`);
// });
