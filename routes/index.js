var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Workout = require("../models/workouts");

mongoose.Promise = global.Promise;

var multer = require("multer");
// Create a storage object with a given configuration
var storage = multer.memoryStorage();
// Set multer storage engine to the newly created object
var upload = multer({ storage: storage });

mongoose.connect(
	"mongodb://admin:secret91@ds129342.mlab.com:29342/healthwealth"
);

/* GET home page. */
router.get("/api", function(req, res, next) {
	res.json({ message: "API Initialized!" });
});

router
	.route("/api/workouts")
	//retrieve all workouts from database
	.get(function(req, res) {
		//looks at out WorkOut Schema
		Workout.find(function(err, workouts) {
			if (err) {
				res.send(err);
			} else
				// responds with a json object of our database s
				res.json(workouts);
		});
	})
	.post(function(req, res) {
		var workout = new Workout();
		//body parser lets us use the req.bodyParser
		workout.name = req.body.name;
		workout.description = req.body.description;
		workout.bodypart = req.body.bodypart;
		workout.imageURL = req.body.imageURL;

		workout.save(function(err) {
			if (err) {
				res.send(err);
			} else res.json(workout);
		});
	});

router
	.route("/api/workouts/:workout_id")
	//put method gives chance to update workout based on id passed to route
	.put(function(req, res) {
		Workout.findById(req.params.workout_id, function(err, workout) {
			if (err) res.send(err);
			//setting new params to whatever, if nothing changes, keep.
			// eslint-disable-next-line
			req.body.name ? (workout.name = req.body.name) : null; //
			// eslint-disable-next-line
			req.body.description
				? (workout.description = req.body.description)
				: null;
			// eslint-disable-next-line
			req.body.bodypart ? (workout.bodypart = req.body.bodypart) : null;
			// eslint-disable-next-line
			req.body.imageURL ? (workout.imageURL = req.body.imageURL) : null;
			workout.save(function(err) {
				if (err) {
					res.send(err);
				} else res.json({ message: "Workout has been updated" });
			});
		});
	})
	.delete(function(req, res) {
		// selects workout by ID then removes
		Workout.remove({ _id: req.params.workout_id }, function(err, workout) {
			if (err) {
				res.send(err);
			}
			console.log(req, res);

			res.json({ workout });
		});
	});

module.exports = router;
