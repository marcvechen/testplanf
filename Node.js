const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/fixed-planfix-path", async (req, res) => {
  try {
    // Сюда вставь свой Webhook от Make
    await axios.post("https://hook.make.com/ВАШ_HOOK", req.body);
    res.send("OK");
  } catch (err) {
    console.error("Ошибка пересылки:", err.message);
    res.status(500).send("Ошибка");
  }
});

app.listen(3000, () => {
  console.log("Слушаем порт 3000");
});
