const express = require("express"),
  app = express(),
  port = 3000,
  bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public/build'));
const mc = require(__dirname + "/controllers/messages_controller")

messagesURL = "/api/messages";
app.post(messagesURL, mc.create);
app.get(messagesURL, mc.read);
app.put(`${messagesURL}/:id`, mc.update);
app.delete(`${messagesURL}/:id`, mc.delete)

app.listen(port, () =>
  console.log(`We're gonna need a bigger boat... ${port}`)
);
