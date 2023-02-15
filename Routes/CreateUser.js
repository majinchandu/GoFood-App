const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = "chanduIsFanOfNarutoUzuomaki!!"

router.post('/createuser', [body('email').isEmail(),
body('password', 'incorrect password').isLength({ min: 5 }),
body('name').isLength({ min: 5 })], async function (req, res) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const salt = await bcrypt.genSalt(10)//creating salt
  let secPassword = await bcrypt.hash(req.body.password,salt);
  try {
    await User.create({
      name: req.body.name,
      password: secPassword,
      email: req.body.email,
      location: req.body.location
    })
    res.json({ success: true })
  } catch (error) {
    console.log(error);
    res.json({ success: false })
  }
})

router.post('/loginuser', [body('email').isEmail(),
body('password', 'incorrect password').isLength({ min: 5 })
], async function (req, res) {


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let email = req.body.email
  try {
    let userData = await User.findOne({ email })
    if (!userData) {
      return res.status(400).json({ errors: "try logging in with correct credentials" });
    }

    const pwdCompare = await bcrypt.compare(req.body.password,userData.password)//comparing the password given by user and the saved password in hash form

    if (!pwdCompare) {
      return res.status(400).json({ error: "try logging with correct credentials" })
    }

    //creating jwt token
    const  data = {
      user:{
        id:userData.id // making token on the basis of id as it is unique
      }
    }
    const authToken = jwt.sign(data,jwtSecret) 
    //ends jwt token
    return res.json({ success: true,authToken:authToken })
  } catch (error) {
    console.log(error);
    res.json({ success: false })
  }
})

module.exports = router;