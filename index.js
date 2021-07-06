const express = require("express");
const fileUpload = require("express-fileupload");
const faceApiService = require("./faceapiService")
const faceApiServicePhanTich = require("./faceapiServicePhanTich")

const app = express();
const port = process.env.PORT || 3000;

app.use(fileUpload());

app.post("/upload", async (req, res) => {
    const { file } = req.files;

    const result = await faceApiService.detect(file.data);

    res.json({
        detectedFaces: result,
    });
});

app.post("/phan_tich", async (req, res) => {
    const { file } = req.files;

    const result = await faceApiServicePhanTich.detect(file.data);

    res.json({
        detectedFaces: result,
    });
});

app.get("/", async (req, res) => {
    res.send("Han pro");
});

app.listen(port, () => {
    console.log("Server started on port:" + port);
});