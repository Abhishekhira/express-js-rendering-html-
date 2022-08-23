const fs=require('fs')
// const input=process.argv
// fs.writeFileSync(input[3],'yes i created this file finally')
// if (input[3]==='add') {
//     fs.writeFileSync(input[4],'hiii file is created')
    
// }else if(input[3]==='remove'){
//     fs.unlinkSync(input[4])
// }else{
//     console.log(input)
// }
// const path=require('path')
// const dirPath=path.join(__dirname,'files')
// console.log(dirPath)
// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,`hiii this is ${i}`)
    
// }
// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((i)=>console.log(i))
// })

//lets learn crud operation
// const filePath=`${dirPath}/hello0.txt`
// fs.readFile(filePath,'utf-8',(err,i)=>{
//     console.log(i)
// })
//update of file
// fs.appendFile(filePath,'and i updated this succesfully',(err)=>{
//     if (!err)  console.log('file is updated')
// })

//there is one more thing to learn here is that how we can rename the particular file
// fs.rename(filePath,`${dirPath}/real.txt`,(err)=>{
//     if(!err){
//    console.log('check name its updated')
//     }
// })
//lets learn how we can succesfull remove or delete the file with crud
// fs.unlinkSync(`${dirPath}/real.txt`)
const express=require('express')
const app=express()

app.get('/',(req,res)=>{
 
  res.send(`<h1>Hi this is home page </h1> 
  <a href="/about">go to about</a>
  `)
})
app.get('/about',(req,res)=>{
  res.send(`<h1>hii this is about page</h1>
  <input type="text" placeholder="enter your name" value=${req.query.name} >
  <button>click me</button>
  <a href="/">go to about</a>
  `)
})

app.get('/help',(req,res)=>{
  res.send('hii this is help page')
})
app.listen(4200)