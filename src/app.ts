
// const express = require('express')
import express, {Application, Request, Response} from 'express'
const app:Application = express()
let data = require('./data.json')


app.get('/',(req:Request, res:Response)=>{

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => res.json(json))
    
    
    // res.send(json)
    
})

app.delete('/:id',(req, res)=>{
    const Id = req.params.id
    delete data[Id]
    res.json(data)

})
app.post('/',(req, res)=>{
    data.push({"id":6,"name":"khaled", "age":30})
    res.json(data)

})
app.put('/:id',(req, res)=>{
  const Id = req.params.id

data.filter((e:any)=> e.id == Id? e.id = 1 : e.id  )

    res.json(data)                      

})


app.listen(3008);


//lap2 

// const fun1 = (req, res, next)=>{
//     res.json({"masseg":"fun"})
//     next();
// }
// const fun2 = (req, res)=>{
//     console.log('gfgffgf');
//     res.json({"masseg":"fun1"})
// }

// app.get('/',fun1,fun2);

// app.get('/user/:name',(req, res) =>{
//     res.send("heloo" + req.params.name)
// });
// app.use((req, res, next) => {
//     console.log('is runing')
//     next()
// })

// app.get("/",(req, res)=>{
//     if(req.query.Admin == "true"){
//         res.send("good")
//     }else{
//         res.send("you are not admin")
//     }
// })


// app.get('/add/:num1/:num2',(req, res) =>{
//    let Num1 = req.params.num1
//    let Num2 = req.params.num2
//    let coNum1 = parseInt(Num1)
//    let coNum2 = parseInt(Num2)
//    let add = coNum1 + coNum2
//    if(req.query.Admin == "true"){
//        res.send(""+add)
//    }else{
//     res.send('you are not admin')
//    }
// });
// app.get('/sub/:num1/:num2',(req, res) =>{
//     let Num1 = req.params.num1
//     let Num2 = req.params.num2
//    let coNum1 = parseInt(Num1)
//    let coNum2 = parseInt(Num2)
//     let add = coNum1 - coNum2
//     res.send(""+add)
// });
// app.get('/mul/:num1/:num2',(req, res) =>{
//     let Num1 = req.params.num1
//     let Num2 = req.params.num2
//    let coNum1 = parseInt(Num1)
//    let coNum2 = parseInt(Num2)
//     let add = coNum1 * coNum2
//     res.send(""+add)
// });
// app.get('/div/:num1/:num2',(req, res) =>{
//     let Num1 = req.params.num1
//     let Num2 = req.params.num2
//    let coNum1 = parseInt(Num1)
//    let coNum2 = parseInt(Num2)
//     let add = coNum1 / coNum2
//     res.send(""+add)
// });



// app.get('/',(req, res)=>{
// console.log("heloo");

// res.json({"masseg":"heloo"})
// // res.status(200).json({"masseg":"heloo"})
// // res.end()
// // res.send("is runing")
// })

// app.post('/user',(req, res) => {
//     res.status(200).json({"masseg":"post"})

// })
// app.put('/user',(req, res) => {
//     res.status(200).json({"masseg":"put"})

// })
// app.delete('/user',(req, res) => {
//     res.status(200).json({"masseg":"delete"})

// })