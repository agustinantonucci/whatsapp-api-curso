const MessageText = (textResponse, number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "text",
    text: {
      preview_url: true,
      body: textResponse,
    },
  });

  return data;
};

const MessageList = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text: "Tengo estas opciones",
      },
      footer: {
        text: "Selecciona una de las opciones para poder atenderte.",
      },
      action: {
        button: "Ver opciones",
        sections: [
          {
            title: "Compra y vende productos",
            rows: [
              {
                id: "main-comprar",
                title: "Comprar",
                description: "Compra los mejores productos para tu hogar.",
              },
              {
                id: "main-vender",
                title: "Vender",
                description: "Vende tus productos.",
              },
            ],
          },
          {
            title: "Centro de atención",
            rows: [
              {
                id: "main-agencia",
                title: "Agencia",
                description: "Puedes visitar nuestra agencia.",
              },
              {
                id: "main-contacto",
                title: "Centro de contacto",
                description: "Te atenderá uno de nuestros agentes.",
              },
            ],
          },
        ],
      },
    },
  });

  return data;
};

const MessageComprar = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "¿Qué deseas comprar?",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "option-laptop",
              title: "Laptop",
            },
          },
          {
            type: "reply",
            reply: {
              id: "option-computadora",
              title: "Computadora",
            },
          },
        ],
      },
    },
  });

  return data;
};

const MessageVender = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "¿Qué deseas vender?",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "option-laptop",
              title: "Laptop"
            },
          },
          {
            type: "reply",
            reply: {
              id: "option-computadora",
              title: "Computadora"
            },
          },
        ],
      },
    },
  });

  return data;
};

module.exports = {
  MessageText,
  MessageList,
  MessageComprar,
  MessageVender
};
