var express = require('express');
var router = express.Router();

const bookmodel = require("../models/bookmodel")

// var tanisha_book = []
/* GET home page. */
router.get('/', async function (req, res, next) {
  const Allbook = await bookmodel.find()
  res.render('index', { Allbook });
});

router.get('/create', async function (req, res, next) {
  const Allbook = await bookmodel.find()
  console.log(Allbook)
  res.render('create', { Allbook });
});

router.post('/create', async function (req, res, next) {
  const newbook = await bookmodel.create({
    name: req.body.name,
    author: req.body.author,
    price: req.body.price,
    language: req.body.language,
  })

  console.log(newbook)

  res.redirect("/readall")
});

router.get('/readall', async function (req, res, next) {
  const Allbook = await bookmodel.find()
  res.render('library', { abd: Allbook });
});

router.get('/delete/:index', function (req, res, next) {
  tanisha_book.splice(req.params.index, 1)
  res.redirect("/readall")
});

router.get('/update/:index', async function (req, res, next) {
  // const i = req.params.index
  // const b = tanisha_book[i]
  // res.render("update",{gogo:b,index:i})

  const index = req.params.index
  const currentbook = await bookmodel.find({
    _id: index
  })
  res.render("update", { currentbook })
  console.log(currentbook)
});

router.post('/update/:index', async function (req, res, next) {
  // const i = req.params.index
  // tanisha_book[i] = req.body 
  // res.redirect("/readall")

  const index = req.params.index

  await bookmodel.findOneAndUpdate(
    {
      _id: index
    }, {

    name: req.body.name,
    author: req.body.author,
    price: req.body.price,
    language: req.body.language,
            
  })

  res.redirect("/readall")

});

router.get("/delete/:index", async (req,res,next)=>{
  const index = req.params.index

  await bookmodel.findOneAndDelete({
    _id: index
  })
  res.redirect("/readall")
})




module.exports = router;





