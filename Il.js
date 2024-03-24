
// https://codepen.io/SH20RAJ/pen/WNWjBaz?editors=0010

const textToBinary = text => [...text].map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
const binaryToText = binary => binary.match(/.{1,8}/g).map(chunk => String.fromCharCode(parseInt(chunk, 2))).join('');

const binaryToIl = (text) => text.replace(/1/g, 'I').replace(/0/g, 'l');
const IlTobinary = (text) => text.replace(/I/g, '1').replace(/l/g, '0');

const textToIl = (text) => textToBinary(text).replace(/1/g, 'I').replace(/0/g, 'l');
const IlTotext = (text) => binaryToText(text.replace(/I/g, '1').replace(/l/g, '0'));




