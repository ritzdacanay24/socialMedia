const express = require('express');
const router = express.Router();
const Joi = require('joi');



router.get('/api/friends/:User_id', function (req, res) {
    try{
      const findFriends = Friends.find(req.params.User_id);
      return res.send(findFriends);
    }catch (ex) {
      return res.status (500).send (`Internal Server Error: ${ex}`);
    }

});
