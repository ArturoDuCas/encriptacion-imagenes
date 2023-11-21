const fs = require('fs'); // File System
const CryptoJS = require("crypto-js"); // Librería de encriptación

let ENCRYPT  = false;
let secretKey = "clave-secreta";

if (ENCRYPT) {
  let imagePath = './unencrypted/image.jpg';
  let image = fs.readFileSync(imagePath);
  let encrypted = CryptoJS.AES.encrypt(image.toString('base64'), secretKey).toString();

  fs.writeFileSync('./encrypted/imagen-encriptada.txt', encrypted);
} else {
  let imagePath = './encrypted/imagen-encriptada.txt';

  if (!fs.existsSync(imagePath)) {
    console.log('No se encontró la imagen encriptada');
    return;
  }

  let encrypted = fs.readFileSync(imagePath);
  let decryptedData = CryptoJS.AES.decrypt(encrypted.toString(), secretKey);
  let decryptedImage = Buffer.from(decryptedData.toString(CryptoJS.enc.Utf8), 'base64');
  fs.writeFileSync('./unencrypted/imagen-desencriptada.jpg', decryptedImage);
}





