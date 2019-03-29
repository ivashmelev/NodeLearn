const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  getTitles(res);
}).listen(8000, "127.0.0.1");

getTitles = (res) => {
  fs.readFile("./titles.json", (err, data) => {
    if(err) throw err;
    getTemplate(JSON.parse(data.toString()), res);
  });
}

getTemplate = (titles, res) => {
  fs.readFile("./template.html", (err, data) => {
    if(err) throw err;
    formatHtml(titles, data.toString(), res);
  });
}

formatHtml = (titles, tmpl, res) => {
  const html = tmpl.replace("%", titles.join("</li><li>"));
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(html);
}