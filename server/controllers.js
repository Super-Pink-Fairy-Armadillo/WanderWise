const db = require('./model.js');

const userController = {};

userController.loginUser = (req, res, next) => {
  // get username and password from req body
  const { username, password } = req.body;

  console.log('verifying credentials');
  //get request login middle wear
  // use bcrypt to get password hash
  //Verify that user is in database
  //make the SQL command
  const selectUser = `
  SELECT * FROM users
  WHERE username = '${username}'
  AND password = '${password}'`;

  db.query(selectUser)
    .then((result) => (res.locals.user = result.rows))
    .then(() => next())
    .catch((err) => {
      console.log(err);
      return next({
        log: 'Error occured in loginUser middleware function',
        status: 500,
        message: { error: 'An error occurred in selectUser Controller' },
      })
    });
};

module.exports = userController;