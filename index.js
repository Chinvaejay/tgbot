const telegram = require('telegram-bot-api'); //2.0.0

const teleBotToken = '5557479382:AAEx5dTshmD1e33t6-vEsss53joB44eUMRg'; // 换成你的Token
const api = new telegram({ token: teleBotToken });
const mp = new telegram.GetUpdateMessageProvider();
api.setMessageProvider(mp);

api
  .start()
  .then(() => {
    console.log('API is started');
  })
  .catch(console.err);

api.on('update', (update) => {
  console.log(update);

  // 处理信息逻辑
  let message = update.message;

  if (message.text) {
    const msgParam = {
      chat_id: message.chat.id,
      text: message.text,
      entries: message.entities,
    };
    api.sendMessage(msgParam);
  }
});
