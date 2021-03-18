const express = require ('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// sets up express to handle data parsing for POST and PUT requests
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// sets up express to handle static files
app.use(express.static('public'));
// sets up our server to a series of "route" files
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log (`Listening on http://localhost:${PORT}`);
})