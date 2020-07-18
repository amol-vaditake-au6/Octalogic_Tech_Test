var express = require("express");
var router = express.Router();
const Car = require("../models/car");

router.get("/car", async (req, res) => {
    try {
        const data = await Car.find({});
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        if (err.name === "ValidationError")
            return res.status(400).send(`Validation Error: ${err.message}`);
        res.send(err.message);
    }
});

router.post("/car", async (req, res) => {
    try {
        const car = new Car({
            ...req.body
        });
        car.save();
        res.status(200).json(car);
    } catch (err) {
        console.log(err);
        if (err.name === "ValidationError")
            return res.status(400).send(`Validation Error: ${err.message}`);
        res.send(err.message);
    }
})

module.exports = router