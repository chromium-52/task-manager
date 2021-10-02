const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: { type: String, required: true, trim: true },
  // validate() to set custom validation rules (in this case, age must be positive)
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    },
  },
  // validation using validator library
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password can\'t contain the word "password"');
      }
    },
  },
});

// const me = new User({
//   name: '      Kenny    ',
//   email: 'MYEMAIL@NAVER.COM    ',
//   password: 'phone0984  ',
// });
// me.save()
//   .then((result) => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log('Error!', error);
//   });

module.exports = User;
