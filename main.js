const express = require("express")
const app = express()

const PORT = process.env.PORT | 3000;

app.get("/", (req,res) => {
    res.json({
        message : 'This is Test Server for Docker.'
    })
}).listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
})