const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const sequelize = require('sequelize')
const app = express()
const PORT = process.env.PORT || 3000
const multer = require('multer')
const pg = require('pg')
const dotenv = require('dotenv');
const poses = require('./yoga.js')

dotenv.load();

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))
var count = 0

// setTimeout(()=>{console.log(warm, count))
let warm = poses.classSection.randomWarms()
app.get('/', (req, res)=>{
let warm = poses.classSection.randomWarms()
  return res.render('yoga', {warm})
})

app.get('/generate', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let warm = poses.classSection.randomWarms()
  return res.render('generate', {warm})
})

app.get('/suns', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let suns =  poses.classSection.randomSunSals()
  return res.render('suns', {suns})
})

app.get('/stand1', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let stand1 =  poses.classSection.randomNum1()
  return res.render('stand1', {stand1})
})

app.get('/stand2', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let stand2 =  poses.classSection.randomNum2()
  return res.render('stand2', {stand2})
})

app.get('/stand3', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let stand3 =  poses.classSection.randomNum3()
  return res.render('stand3', {stand3})
})

app.get('/sun2', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let sun2 =  poses.classSection.randomSun()
  return res.render('sun2', {sun2})
})

app.get('/core', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let core =  poses.classSection.randomCore()
  return res.render('core', {core})
})

app.get('/balance', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let balance =  poses.classSection.randomBalance()
  return res.render('balance', {balance})
})

app.get('/back', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let back =  poses.classSection.randomBack()
  return res.render('back', {back})
})

app.get('/medit', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let medit =  poses.classSection.randomMedit()
  return res.render('medit', {medit})
})

app.get('/hips', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let hips =  poses.classSection.randomHip()
  return res.render('hips', {hips})
})

app.get('/twists', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let twists =  poses.classSection.randomTwist()
  return res.render('twists', {twists})
})

app.get('/fbends', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let fbends =  poses.classSection.randomForward()
  return res.render('fbends', {fbends})
})

app.get('/inverts', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let inverts =  poses.classSection.randomInvert()
  return res.render('inverts', {inverts})
})

app.get('/breaths', (req, res)=>{
//  var warm = poses.classSection.randomWarms()
let breaths = poses.classSection.randomBreath()
  return res.render('breaths', {breaths})
})




const port = process.env.PORT || 3000
app.listen(port, ()=>
console.log("okay works"))
