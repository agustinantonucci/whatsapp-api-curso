const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

const VerifyToken = (req, res) => {
  try {
    let accessToken = "TASITUQUWOE1817IU5I1IAUSDF";
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if (challenge != null && token != null && token == accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(400).send();
  }
};

const ReceivedMessage = (req, res) => {
  try{

    let entry = (req.body["entry"])[0];
    let changes = (entry["changes"])[0];
    let value = changes["value"];
    let messageObject = value["messages"];

    myConsole.log(messageObject)

    res.send("EVENT_RECEIVED");
  }catch(error){
    res.send("EVENT_RECEIVED");
  }
};

module.exports = {
  VerifyToken,
  ReceivedMessage,
};
