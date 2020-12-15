require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

const randIndex = ( arrayLength ) => {
  return Math.floor(Math.random() * arrayLength)
}

// ==================== ===================== =========== BOT REPLIES
 const profanityWarnings = [
  `No swearing here or I will kick you the beep boop outta here you bitch ass neega`,
  "you racist hoe, we don't do that here.",
];

const loveYouReplies = [
  "I would love you too if I was capable of having human emotions",
  "Awwn thank you homo sapien",
  "I think love is a human construct but I appreciate the gesture",
  'Boop beep beep 💋',
];

// =============================================================================================================


client.on("ready", () => {
  console.log("BOT BOOTED");
});

client.on("message", (message) => {
  switch (true) {
    case message.content.toLowerCase().includes("fuck"):
      message.reply(profanityWarnings[0]);
      break;
    case message.content.toLowerCase().includes("shit"):
      message.reply(profanityWarnings[0]);
      break;
    case message.content.toLowerCase() === "i love this bot":
      message.reply(
        loveYouReplies[randIndex(loveYouReplies.length)]
      );
      message.react("💓");
      break;
    case message.content.toLowerCase() === "omo this girl fine die":
      message.member.roles.add("787823775147884607");
      message.reply(
        `congrats you're now a simp, you dey see the red for your name? na danger signal to other members for here`
      );
      message.react("🤡");
      break;
    case message.content.toLowerCase() === "are you mad" ||
      message.content.toLowerCase() === "are you mad?":
      message.reply("maddison ni");
      break;
  }
});

client.login(process.env.BOT_TOKEN);
