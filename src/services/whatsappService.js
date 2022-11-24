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
    header: {
      "Content-type": "application/json",
      Authorization:
        "Bearer EAAZAIkjWxJeMBAMjAQeq2QyDt2zD38DZCj71gIW9q2TNYwJO4ZC09WxpA5ThNEtoqiHXCls7sZCtLfzZC6kfTC6EwEMTwETXNB8bz9TVERgkE9ftqamJ818sg6PLDlGvxVEb5wmbLcA9VrGve5jVXVlOYSq4BmgmYu84PsWVNGFaHM3XF9uRr",
    },
  };

  const req = https.request(options, res => {
    res.on("data", d => {
        process.stdout.write(d);
    })
  });

  req.on("error", error => {
    console.error(error);
  })

  req.write(data);
  req.end();
};

module.exports = {
    SendMessageWhatsApp
}