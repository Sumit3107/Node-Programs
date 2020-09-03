// Q3. Create a node js application that takes a number ‘n’ as a user input and calculates the
// sum of n natural numbers and stores the result in a file “result.txt” which already exists. Also,
// “Success” message gets printed on console in case of success and “Error occurred” gets
// displayed on console if any error occurs and 402 should be sent in headers.

//files associated-> success.html, fail.html,index.html

const fetch = require("node-fetch");
var http = require("http");
var fs = require("fs");
const PORT = 8000;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/", (req, res) => {
const num = req.body.n;
var sum = 0;
for (var i = 1; i <= num; i++)
sum += i;
fs.writeFile('result.txt', sum, err => {
//reading appended file test1.txt
fs.readFile('result1.txt', 'utf8', function (err, data1) {
if (err) {
fs.readFile("./fail.html", "utf8", function (err, data) {
res.writeHead(402, { "Content-Type": "text/HTML" });
res.write("Error Occured");
console.log("Error Occured")
res.end();
});
}
else {
fs.readFile("./success.html", "utf8", function (err, data) {
res.writeHead(200, { "Content-Type": "text/HTML" });
res.write("success");
console.log("success");
res.end();
});
}
});
})
});

app.get("/", (req, res) => {
fs.readFile("./index.html", function (err, data) {
res.writeHead(200, { "Content-Type": "text/HTML" });
res.write(data);
res.end();
});
});
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
