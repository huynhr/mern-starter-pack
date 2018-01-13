const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  console.log('router works in server!')
});

module.exports = router;