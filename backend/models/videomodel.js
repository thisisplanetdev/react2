const express = require('express')
const { default: mongoose } = require('mongoose')
const { type } = require('os')

const modelsc = mongoose.Schema({
   number:{
    type:Number,
    required:true,
    unique:true
   },
   link:{
      type:String,
      required:true
   },
   tag:{
      type:String,
   }
})
module.exports = mongoose.model('videoinfo',modelsc)