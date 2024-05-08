const express = require('express');
const mongoDB = require('./db.js'); // Import your mongoDB function from the file

const app = express();
const port = 5000;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.use(express.json());
app.use('/api', require("./Routes/CreatUser"));

app.get('/', async (req, res) => {
    try {
        // Call the mongoDB function to fetch data
        const data = await mongoDB();
        res.json(data); // Send the fetched data as JSON response
    } catch (error) {
        console.error("Error fetching MongoDB data:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
