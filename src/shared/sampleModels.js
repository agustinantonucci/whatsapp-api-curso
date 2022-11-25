const SampleText = (textResponse, number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "text",
    text: {
      body: textResponse
    }
  });

  return data;
};

const SampleImage = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "image",
    image: {
      link: "https://file-examples.com/storage/fe8109a782637e9df99d7a0/2017/10/file_example_JPG_100kB.jpg"
    }
  });

  return data;
};

const SampleAudio = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "audio",
    audio: {
      link: "https://file-examples.com/storage/fe8109a782637e9df99d7a0/2017/11/file_example_MP3_1MG.mp3"
    }
  });

  return data;
};

const SampleVideo = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "video",
    video: {
      link: "https://file-examples.com/storage/fe4b6a81a0637fef794ccfe/2017/04/file_example_MP4_480_1_5MG.mp4"
    }
  });

  return data;
};

const SampleDocument = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "document",
    document: {
      link: "https://file-examples.com/storage/fe8109a782637e9df99d7a0/2017/10/file-sample_150kB.pdf"
    }
  });

  return data;
};

const SampleButtons = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "¿Confirmas tu registro?",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "001",
              title: "SI",
            },
          },
          {
            type: "reply",
            reply: {
              id: "002",
              title: "NO",
            },
          },
        ],
      },
    },
  });

  return data;
};

const SampleList = (number) => {
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

const SampleLocation = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "location",
    location: {
      latitude: "-32.39005627985419",
      longitude: "-63.24546387426719",
      name: "Casa",
      address: "Quinquela Martin 2107"
    }
  });

  return data;
};

module.exports = {
  SampleText,
  SampleAudio,
  SampleButtons,
  SampleDocument,
  SampleImage,
  SampleList,
  SampleLocation,
  SampleVideo,
};
