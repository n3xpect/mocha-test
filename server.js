const http = require("http");


const users = [
  {id: 1, firstname: "Mehmet", lastname: "Caykara", ssn: 1234},
  {id: 2, firstname: "Ahmet", middlename: "Tarik", lastname: "Gunal", ssn: 4321},
  {id: 3, firstname: "Mehmet", lastname: "Seven", ssn: 2222},
  {id: 4, firstname: "John", lastname: "Doe", ssn: 3333},
  {id: 5, firstname: "Jane", lastname: "Doe", ssn: 4444},
];

const requestListener = (req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405);
    return res.end("Bad request\n");
  }

  const url = req.url.replace(/^[\\/]+|[\\/]+$/g, '');

  if (url === 'api\/users') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(users, null, 2));
  }

  const findUserByIdRoute = url.match(/api\/users\/([0-9]+)/);
  if (!!findUserByIdRoute && findUserByIdRoute.length > 0) {
    const userId = +findUserByIdRoute[1];
    const findUser = users.find(user => user.id === userId);

    if (!findUser) {
      res.writeHead(404);
      return res.end(`User ${userId} not found\n`);
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(findUser, null, 2));
  }

  res.writeHead(405);
  return res.end("Bad Request\n");
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log('listening on 8080');

module.exports = server;