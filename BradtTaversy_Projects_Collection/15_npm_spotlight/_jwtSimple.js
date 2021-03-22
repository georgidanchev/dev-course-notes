const jwt = require('jwt-simple');
const config = require('config');
const uuid = require('uuid');

function getToken() {
  const payload = {
    id: uuid.v4(),
    name: 'Brad',
  };
  const token = jwt.encode(payload, config.get('jwtSecret'));
  return { token };
}

function validateToken(token) {
  const decoded = jwt.decode(token, config.get('jwtSecret'));
  console.log(config.get('apiKey'));
  return decoded;
}

// console.log(getToken());

console.log(validateToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjkyNWM3MzJmLTZmOTYtNGIyNC1iNjU5LTc0ZGM4Mzk3ZTcxZSIsIm5hbWUiOiJCcmFkIn0.cg7i87mYpN5bR-x7BjpV6VRg7Je7w7xBGf6uvjCkeq8'));
