// telegram-integration.js

const TelegramBot = require('node-telegram-bot-api');

// Replace with your own Telegram bot token
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token);

// Function to send product order
function sendOrderMessage(chatId, orderDetails) {
    const message = `New Product Order:\n\n${orderDetails}`;
    bot.sendMessage(chatId, message)
        .then(() => {
            console.log('Order message sent successfully.');
        })
        .catch((error) => {
            console.error('Error sending message:', error);
        });
}

// Example usage
// Replace with a valid chat ID and order details
const chatId = 'YOUR_CHAT_ID';
const orderDetails = 'Product: Awesome Gadget, Quantity: 1, Price: $99.99';
sendOrderMessage(chatId, orderDetails);
