// const fs = require('fs');

// console.log('Hello Node.js');

// // Logging global objects
// console.log(global);
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(exports);
// console.log(module.exports === exports);

// // Blocking vs Non-blocking IO
// const content = fs.readFileSync('./data.js', 'utf8');
// console.log(content);

// fs.readFile('./data.js', 'utf8', (err, content) => {
//   console.log(content);
// });


//ข้อ1
// const data = require('./data.js'); 

// console.log(data);


//ข้อ2

// exports.a = 1;
// exports.b = 2;
// exports = { a: 1, b: 2 };//exports ไม่ได้ชี้ไปยัง module.exports
// module.exports = [1, 2, 3];//ส่งออก array โดยตรง
// console.log(exports);


//ข้อ3
// index.js
const http = require('http');

// สร้าง server
const server = http.createServer((req, res) => {
  console.log('=== Request Object ===');
  console.log(req); 

  console.log('=== Response Object ===');
  console.log(res); 

  // ส่งค่า uptime (เป็น string) กลับไป
  const uptimeInSeconds = process.uptime().toString();
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Server uptime: ${uptimeInSeconds} seconds`);
});

// ให้ server ฟังที่ port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
