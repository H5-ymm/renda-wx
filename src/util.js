const manglingFormatCardNumber = (cardNumber) => {
    if (cardNumber && cardNumber.length > 8) {
        return `${cardNumber.substring(0, 4)} ${'*'
      .repeat(cardNumber.length - 8)
      .replace(/(.{4})/g, `
        $1 `)}${
      cardNumber.length % 4 ? ' ' : ''
    }${cardNumber.slice(-4)}`;
    }
    // eslint-disable-next-line semi
    return cardNumber
};
module.exports = {
    manglingFormatCardNumber: manglingFormatCardNumber
};
