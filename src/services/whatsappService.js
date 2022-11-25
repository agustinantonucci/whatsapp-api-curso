const https = require("https");

const SendMessageWhatsApp = (data) => {
  const options = {
    host: "graph.facebook.com",
    path: "/v15.0/105751265702583/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer EAAZAIkjWxJeMBABvlnobyLtHtGJVoUWiIOS09GH2DJiSsAeR9vlEqLKvfhBh9PYPU6WHJeNAWJ4vfsb7Li09KZB5aPyERznWg6BF1Y0QZAaoAUGlhd2468vYbRCJAORP6lP40ZAn9Ml6KSmKwOMlB18hEjNtZBw2wb1TdZAx4wOFhNwSsrzbxMJZBHVCy0QXlZAZAeSVm6TAjDgZDZD",
    },
  };

  const req = https.request(options, (res) => {
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
};

module.exports = {
  SendMessageWhatsApp,
};
