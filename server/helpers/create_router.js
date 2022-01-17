//9 create helpers/create_router.js file
//9 import { application, Router } 
const { application, Router } = require('express');
const express = require('express');

//10
const createRouter = function(data) {
  const router = express.Router();

//11 copy 1,2,3,5,6,7,8 from  server.js to this file
//12 then change app.get to router.get
//then change teas  to data
//then delete "/api/teas from route to "/

  //1
  //insomnia INDEX/get: http://localhost:5000/api/teas
  router.get("/", (reg, res) => {
    res.json(data);
  });

  //2
  //line23 id 传入 line24 req.params.id
  //insomnia SHOW/get :http://localhost:5000/api/data/1
  router.get("/:id", (req, res) => {
    res.json(data[req.params.id]);
  });

  //3
  //insomnia CREATE/post: http://localhost:5000/api/data
  router.post("/", (req, res) => {
    //5 delete below
    // res.json("req body",req.body)

    // 6 in insomnia when press send,then would add it into hard coding data
    data.push(req.body);
    res.json(data);
  });

  //7
  //insomnia DELETE/delete: http://localhost:5000/api/data/2
  router.delete("/:id", (req, res) => {
    data.splice(req.params.id, 1);
    res.json(data);
  });

  // 8
  //line47 body is the new data json create in insomnia
  //insomnia UPDATE/put: http://localhost:5000/api/data/0
  //update early with earl
  router.put('/:id', (req, res) => {
    data[req.params.id] = req.body;
    res.json(data);
  });

//13 
  return router;
  
  
}

//10
module.exports = createRouter;



