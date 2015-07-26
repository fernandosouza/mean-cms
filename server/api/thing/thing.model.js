'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  title: String,
  date: String,
  text: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);