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
    let messages = messageObject[0];
    let text = GetTextFromUser(messages);

    console.log(text);

    res.send("EVENT_RECEIVED");
  }catch(error){
    console.log(error);
    res.send("EVENT_RECEIVED");
  }
};

const GetTextFromUser = (messages) => {
    let text = "";
    let typeMessage = messages["type"];

    if(typeMessage == "text") {
        text = (messages["text"])["body"];


    } else if(typeMessage == "interactive") {
        let interactiveObject = messages["interactive"];
        let typeInteractive = interactiveObject["type"];
        console.log(interactiveObject)

        if(typeInteractive == "button_reply"){
            text = (interactiveObject["button_reply"])["title"];

        } else if (typeInteractive == "list_reply") {
            text = (interactiveObject["list_reply"])["title"];
        } else {
            console.log("sin mensaje");
        }
    } else {
        console.log("sin mensaje");
    }

    return text;
}

module.exports = {
  VerifyToken,
  ReceivedMessage,
};
