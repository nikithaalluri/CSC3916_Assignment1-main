const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/", (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Echo server running on port ${port}`);
});
