import express from 'express';
import cors from 'cors'

 const app =express();
 app.use(cors());
 app.get('/', (req, res) => {
   const reqArray = req.query.fullname.split(' ');
   let str=' ';
   reqArray.length==3 ? str = reqArray[2] +' '+ reqArray[0].match(/^./i) + '. ' + reqArray[1].match(/^./i) +'.'  :
   reqArray.length==2 ? str = reqArray[1] +' '+ reqArray[0].match(/^./i) + '.':
   reqArray.length==1 && reqArray[0]!='' ? str = reqArray[0] :
   str='Invalid fullname';
   res.send(str);
 }
);

app.listen(3000, ()=>{
  console.log('Сервер запущен');
});
