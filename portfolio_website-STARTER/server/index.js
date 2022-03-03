const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.download("./JohnnyT_Resume.pdf")
});

app.listen(5000)