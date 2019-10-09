
const express = require('express');
const app = express();
const historyRoutes = express.Router();

// Require History model in our routes module
let History = require('../models/History');

// Defined store route
historyRoutes.route('/add').post(function (req, res) {
  let history = new History(req.body);
  history.save()
    .then(history => {
      res.status(200).json({'history': 'history in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
historyRoutes.route('/').get(function (req, res) {
    History.find(function (err, historyes){
    if(err){
      console.log(err);
    }
    else {
      res.json(historyes);
    }
  });
});

// Defined edit route
historyRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  History.findById(id, function (err, history){
      res.json(history);
  });
});

//  Defined update route
historyRoutes.route('/update/:id').post(function (req, res) {
    History.findById(req.params.id, function(err, next, history) {
    if (!history)
      return next(new Error('Could not load Document'));
    else {
        history.category = req.body.category;
        history.content = req.body.content;
        history.save().then(history => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
historyRoutes.route('/delete/:id').get(function (req, res) {
    History.findByIdAndRemove({_id: req.params.id}, function(err, history){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = historyRoutes;
