
//    console.log('Hello Node.js');

// global.console.log('Hello');
// console.log('Hello'); 

// console.log(__dirname); //แสดง path ของ directory ที่ไฟล์นี้อยู่
// console.log(__filename); //แสดง path ของไฟล์นี้
// console.log(module); // แสดงข้อมูลเกี่ยวกับโมดูลปัจจุบัน
// console.log(exports); // แสดงข้อมูลเกี่ยวกับ exports ของโมดูลปัจจุบัน
// const a = {};
// const b = a ;
// console.log(a === b); 
// console.log(module.exports === exports); // true, เพราะ exports เป็นตัวแปรที่ชี้ไปยัง module.exports


//blocking
const fs = require('fs');
// const data = fs.readFileSync( './data.js','utf-8');
// console.log(data);
// console.log('Next operation');

// non-blocking
fs.readFile('./data.js', 'utf-8', 
    function(err, data)  {
        console.log(data);
    });
console.log('Next operation');