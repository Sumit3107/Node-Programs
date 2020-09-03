module.exports.log = function (msg) { 
    fs.readFile('result.txt', 'utf8', function (err, data1) {
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
};