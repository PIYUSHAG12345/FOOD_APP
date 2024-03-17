// Import Mongoose
const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb+srv://gofood:PsjJhrbueNa5AwCS@cluster0.zghmic5.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB using Mongoose
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");
        const fetched_data =await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        console.log(data);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;
//have to run local host for fetching data