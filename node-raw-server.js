const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <head>
                <title>Node web server</title>
            </head>
            <body>
                <h1>Hello, welcome to Node web server!</h1>

                <form action='/create-user' method="POST">
                    <input type="text" name="name"></input>
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>   
    `);
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const name = parsedBody.split("=")[1];
      console.log(name);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <head>
                <title>Node web server</title>
            </head>
            <body>
                <h1>List of users</h1>
                <ul>
                    <li>Gabriel</li>
                    <li>Daniel</li>
                    <li>Rafael</li>
                </ul>
            </body>
        </html>   
        
    `);
    return res.end();
  }
});

server.listen(3000);
