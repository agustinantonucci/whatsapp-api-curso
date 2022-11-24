const https = require("https");

const SendMessageWhatsApp = (textResponse, number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "text",
    text: {
      body: textResponse,
    },
  });

  const options = {
    host: "graph.facebook.com",
    path: "/v15.0/105751265702583/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer 123513143613",
    },
  };

  const req = https.request(options, res => {
    res.on("data", d => {
        process.stdout.write(d);
    })
  });

  console.log(req);

  req.on("error", error => {
    console.error(error);
  })

  req.write(data);
  req.end();
};

module.exports = {
    SendMessageWhatsApp
}