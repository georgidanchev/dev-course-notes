const bcrypt = require('bcryptjs');

async function hashPassword(plainText) {
  const user = {
    name: 'Brad',
    email: 'brad@abc.com',
    password: plainText,
  };

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(plainText, salt);

  console.log(user);
}

async function comparePassword(plainText, hash) {
  const isMatch = await bcrypt.compare(plainText, hash);
  if (isMatch) {
    console.log('Match');
  } else {
    console.log('Not match');
  }
}

// hashPassword('123456');

comparePassword('123456', '$2a$10$SOzvmVltGUyhl/bMA3haF.4eAQY.VxGIs1xoARJrEQ2krMdbo4DjG');
