const orderProduct = (productName, price, customerPhoneNumber) => {
    const telegramBotToken = 'YOUR_TELEGRAM_BOT_TOKEN';
    const chatId = 'YOUR_CHAT_ID';

    const message = `New order received: \nProduct: ${productName} \nPrice: $${price} \nCustomer Phone: ${customerPhoneNumber}`;

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                console.log('Order details sent to Telegram successfully.');
            } else {
                console.error('Error sending message to Telegram:', data.description);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
};

module.exports = orderProduct;