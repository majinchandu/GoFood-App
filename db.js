// mongodb://localhost:27017
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoURI = 'mongodb+srv://GOFOOD:chauhan20@cluster0.vyzojrl.mongodb.net/gofoodmern';
mongoose.set('strictQuery', true);
async function mongoDB() {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async () => {
        console.log('connected');
        const fetched_data = await mongoose.connection.db.collection("food_items"); //fetching data from collection named food_items;
        fetched_data.find({}).toArray(async function (err, data) { //using .find ({}) to print the whole data and converting into the array

            const foodCategory = await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(async function (err, catData) {
                if (err) {
                    console.log(err);
                } else {
                    // console.log(data);
                    global.food_items = data; // making a global variabe named food_items and storing the data in it of food_items collection/table
                    global.foodCategory = catData
                }
            })
        })
    });
}
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoDB;



