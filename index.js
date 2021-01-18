const TeleBot = require('telebot');
const bot = new TeleBot('1328989164:AAHSp3UENCRwewxZVX4lP-bQqYzTdU6SX5g');

const userAlgorithm = require('./src/botAlgo')

var estado = 0;
var data = {};

bot.on('/start', msg => {
  estado=0;
  userAlgorithm[estado].menssages.map((message)=>
    bot.sendMessage(msg.from.id, message)
  )

  /* +++++++++ codigo boton ++++++++++++++++++++
    const replyMarkup = bot.inlineKeyboard([
        [
	  bot.inlineButton('Command button', {validate: 'Command'})
        ],
        [
            bot.inlineButton('Regular data button', {validate: 'nothing'})
        ]
    ]);
    return bot.sendMessage(msg.from.id, 'Example of command button.', {replyMarkup});*/
});

bot.on('text', (msg)=>{
  if(msg.text==='/start')return;
  if(userAlgorithm[estado].validate(msg.text)){
    data[userAlgorithm[estado].title] = msg.text;
    estado++;
  }
  if(userAlgorithm[estado].title === 'final'){
    bot.sendMessage(msg.from.id, JSON.stringify(data))
    return;
  }
  userAlgorithm[estado].menssages.map((message)=>
    bot.sendMessage(msg.from.id, message)
  )
  return;
})

// +++++++++ codigo boton ++++++++++++++++++++
bot.on('callbackQuery', (msg)=>{
  return bot.sendMessage(msg.from.id, 'cosa')
})

bot.start();
