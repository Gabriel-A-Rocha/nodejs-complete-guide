const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body>
            <form action="/message" method="POST">
                <input type="text" name="message"></input>
                <button type="submit">Send</button>
            </form>
        </body>`
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    // accept incoming data
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    // end of transfer
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Response Page</title></head>");
  res.write("<body><h1>Response from Node.js</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;

module.exports = {
  handler: requestHandler,
  someText: "Hard coded text",
};

exports.handler = requestHandler;
exports.someText = "Hard coded text";
