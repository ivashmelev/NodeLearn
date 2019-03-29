http = require("http");
fs = require("fs");

http.createServer((req, res) => {
  const answer = showReadFile(res);
  // res.end(answer);
}).listen(8000, "127.0.0.1");

showReadFile = (res) => {
  fs.readFile("./images.json", (err, data) => {
    if(err) throw err;
    res.end(data);
  });
}