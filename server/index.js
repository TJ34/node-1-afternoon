const express = require("express"),
  app = express(),
  port = 3000,
  bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

const mc = require(__dirname + '/controllers/messages_controller');

const messagesBaseURL = "/api/messages";
app.post(messagesBaseURL,mc.create);
app.get(messagesBaseURL,mc.read);
app.put(`${messagesBaseURL}/:id`, mc.update);
app.delete(`${messagesBaseURL}/:id`, mc.delete);


app.listen(port, () =>
  console.log(`We're gonna need a bigger boat... ${port}`)
);