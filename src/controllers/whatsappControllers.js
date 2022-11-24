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
  res.send("hola received message");
};

module.exports = {
  VerifyToken,
  ReceivedMessage,
};
