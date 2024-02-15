const errorHandler = (error, res) => {
    if (error.statusCode != 500) {
        return res.status(400).send({ message: error.message });
    } else {
        return res.status(500).send({ message: error.message });
    }
}

module.exports = errorHandler;