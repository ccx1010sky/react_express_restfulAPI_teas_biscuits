const express = require("express");
const app = express();
const cors = require("cors");
//14
const createRouter = require('./helpers/create_router')

//hard coding data
const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" },
];

//17
// create  new hard coding data
const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Hobnobs", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" },
];

app.use(cors());

//4
app.use(express.json());



//15
const teasRouter = createRouter(teas)
//16
app.use('/api/teas',teasRouter)


//18
const  biscuitsRouter = createRouter(biscuits)
app.use('/api/biscuits',biscuitsRouter)



app.listen(5000, function () {
  console.log(`App running on port ${this.address().port}`);
});
