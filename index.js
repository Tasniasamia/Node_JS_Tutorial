const data=require('./modules/data')
const a = 'Tasnia Sharin';
console.log(a);
console.log(`${a} Senior Developer`);
console.log('The most popular Senior Web developer is Tasnia Sharin Samia');
console.log(data.func1())
//pathName
const path=require('path');
console.log("Get PathName",  path.basename("D:/NODE_JS/package.json"))
//file System
const fileSystem=require('fs');
console.log(fileSystem.readFileSync('./modules/data.js','utf-8'))
fileSystem.readFile('./modules/data.js',()=>{
    console.log(data.toString());
})
//event
const event=require('./modules/events');
const eventsHappen=event.eventObj
eventsHappen.on('vibratePhone', () => {
console.log("Your phone is vibrating");
    });
event.callComing()