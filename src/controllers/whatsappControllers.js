const whatsappService = require("../services/whatsappService.js");
const samples = require("../shared/sampleModels.js");

const VerifyToken = (req, res) => {
  try {
    let accessToken = "RTQWWTVHBDEJHJKIKIKNDS9090DS";
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
  try {
    let entry = req.body["entry"][0];
    let changes = entry["changes"][0];
    let value = changes["value"];
    let messageObject = value["messages"];

    if (typeof messageObject != "undefined") {
      let messages = messageObject[0];
      let number = messages["from"];
      let text = GetTextFromUser(messages);

      let data;

      switch (text) {
        case "text":
          data = samples.SampleText("Hola usuario", number);
          break;
        case "image":
          data = samples.SampleImage(number);
          break;
        case "audio":
          data = samples.SampleAudio(number);
          break;
        case "video":
          data = samples.SampleVideo(number);
          break;
        case "document":
          data = samples.SampleDocument(number);
          break;
        case "button":
          data = samples.SampleButtons(number);
          break;
        case "list":
          data = samples.SampleList(number);
          break;
        case "location":
          data = samples.SampleLocation(number);
          break;
        default:
          data = samples.SampleText("No entiendo que tipo es", number);
          break;
      }

      whatsappService.SendMessageWhatsApp(data);
    }

    res.send("EVENT_RECEIVED");
  } catch (error) {
    console.log(error);
    res.send("EVENT_RECEIVED");
  }
};

const GetTextFromUser = (messages) => {
  let text = "";
  let typeMessage = messages["type"];

  if (typeMessage == "text") {
    text = messages["text"]["body"];
  } else if (typeMessage == "interactive") {
    let interactiveObject = messages["interactive"];
    let typeInteractive = interactiveObject["type"];
    console.log(interactiveObject);

    if (typeInteractive == "button_reply") {
      text = interactiveObject["button_reply"]["title"];
    } else if (typeInteractive == "list_reply") {
      text = interactiveObject["list_reply"]["title"];
    } else {
      console.log("sin mensaje");
    }
  } else {
    console.log("sin mensaje");
  }

  return text;
};

module.exports = {
  VerifyToken,
  ReceivedMessage,
};
