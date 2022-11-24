const VerifyToken = (req, res) => {
    res.send("hola verifyToken");
}

const ReceivedMessage = (req, res) => {
    res.send("hola received message");
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}