const jwt = require("jsonwebtoken");
const connection = require("../db/conn"); // Assuming you have a MySQL connection setup

// Middleware to authenticate the user
const auth = (req, res, next) => {
  try {
    // Get the token from the authorization header
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).send("Access denied. No token provided.");
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.locals = decoded.userId; // Save userId in req.locals

    // Check if the user exists in the database
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [req.locals], (error, results) => {
      if (error) {
        return res.status(500).send("Database query error");
      }
      if (results.length === 0) {
        return res.status(401).send("Invalid token. User not found.");
      }
      next(); // User is authenticated, proceed to the next middleware
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send("Invalid token");
  }
};

module.exports = auth;


// const jwt = require("jsonwebtoken");
// // middle ware to autheticate the user 
// const auth = (req, res, next) => {
//   try {
//     // get the token 
//     const token = req.headers.authorization.split(" ")[1];
//     // verify the token 
//     const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
//     if (!verifyToken) {
//       return res.status(401).send("Token error");
//     }
//     // save the user in locals 
//     req.locals = verifyToken.userId;
//     next();
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// module.exports = auth;
