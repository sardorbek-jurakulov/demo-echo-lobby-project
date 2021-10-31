const Telegraf = require('telegraf');

const bot = new Telegraf('2076830008:AAFnInyiJ6kGv-jAzOLsCDPZnlSHQcHz18w');

const helpMessage = `
Say something to me!

/start - start the bot
/help - command reference

`;

bot.use((ctx, next) => {
  if(ctx.updateSubTypes[0] == "text") {
    bot.telegram.sendMessage(-605174305, ctx.from.username + " said: " + ctx.message.text)
  } else {
    bot.telegram.sendMessage(-605174305, ctx.from.username + " send: " + ctx.updateSubTypes[0]);
  }
  next();
});

bot.start((ctx) => {
  ctx.reply('Hi, I am echo Bot');
  ctx.reply(helpMessage);
});

bot.help((ctx) => {
  ctx.reply(helpMessage);
})

bot.command(['echo', 'Echo', 'ECHO'], (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" ");
  let message = '';
  
  if(inputArray.length == 1) {
    message = 'You say echo';
  } else if(inputArray.length > 1) {
    inputArray.shift();
    message = inputArray.join(" ");
  }

  ctx.reply(message);
});

bot.launch();