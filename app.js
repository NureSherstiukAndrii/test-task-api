const express = require("express");
const cors = require("cors");
const app = express();

const eventRouter = require("./router/eventRouter");

app.use(express.json());
app.use(cors());

app.use('/api', eventRouter);

app.listen(5000, async () => {
  console.log(`Listening on port ${process.env.PORT_SERVER}`);
});