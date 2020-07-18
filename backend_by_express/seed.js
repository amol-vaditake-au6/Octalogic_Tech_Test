const Car = require("./models/car");
const data = require("./data.json");
const seeding = async () => {
  try {
    Car.collection.countDocuments({}, function (error, count) {
      if (count === 0) {
        Car.collection.insertMany(data);
        console.log(
          "its look like you are first time connected with server so Data seeding done"
        );
      } else {
        console.log("Data seeding done Already");
      }
    });
  } catch (error) {
    console.error();
  }
};

module.exports = seeding;
