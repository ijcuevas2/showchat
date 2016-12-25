var express    = require('express');
var app        = express();

/**
 * Use the files from the public path.
 * Using path.join here might be better
 * to make this work with Windows paths.
 */
var publicPath = __dirname + '/../public';
console.log(publicPath);
app.use(express.static(publicPath));

/**
 * Set the port of the server.
 */
var port = process.env.PORT || 3000;
console.log("Express server running on " + port);
app.listen(process.env.PORT || port);
