const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const bot = new TelegramBot(process.env.BOT_TOKEN);
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bot running ✅");
});

app.post(`/bot${process.env.BOT_TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

bot.on("message", (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Welcome <tg-emoji emoji-id="5368324170671202286"></tg-emoji> Premium User`,
    { parse_mode: "HTML" }
  );
});

app.listen(process.env.PORT || 3000);
