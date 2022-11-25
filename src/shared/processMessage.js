const whatsappModel = require("../shared/whatsappModels.js");
const whatsappService = require("../services/whatsappService.js");

const Process = (textUser, number) => {
  textUser = textUser.toLowerCase();
  let models = [];

  if (textUser.includes("hola")) {
    models.push(whatsappModel.MessageText("Hola, un gusto saludarte", number));
    models.push(whatsappModel.MessageList(number));
  } else if (textUser.includes("gracias")) {
    models.push(whatsappModel.MessageText("Gracias a ti por escribirme", number));
  } else if (textUser.includes("adios") || textUser.includes("bye") || textUser.includes("me voy")) {
    models.push(whatsappModel.MessageText("Hasta la próxima", number));
  } else if (textUser.includes("comprar")) {
    models.push(whatsappModel.MessageText("Registrate en el siguiente formulario para comprar: https://www.youtube.com/watch?v=YGICYKnIm2A", number));
  } else if (textUser.includes("vender")) {
    models.push(whatsappModel.MessageText("Registrate en el siguiente formulario para vender: https://www.youtube.com/watch?v=YGICYKnIm2A", number));
  }else {
    models.push(whatsappModel.MessageText("No entiendo lo que dices", number));
  }

  models.forEach((model) => {
    whatsappService.SendMessageWhatsApp(model);
  });
};

module.exports = {
  Process,
};
