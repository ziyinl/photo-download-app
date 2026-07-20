const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", function (request, response) {
  response.json({
    success: true,
    message: "照片下載系統後端已成功啟動"
  });
});

app.get("/api/health", function (request, response) {
  response.json({
    success: true,
    status: "ok"
  });
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
