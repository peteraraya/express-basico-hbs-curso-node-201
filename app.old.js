const http = require('http');



http.createServer((req, res) => {

  // console.log(req);

  // petición exitosa
  res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  res.writeHead(200, { 'Content-Type': 'application/csv' });

  // res.writeHead(200, { 'Content-Type': 'application/json' });

  res.write('id; nombre\n');
  res.write('1; Peter\n');
  res.write('2; Pedro\n');
  res.write('3; Piter\n');

  // const persona = {
  //   id: 1,
  //   nombre: 'Pedro'
  // }

  // res.write(JSON.stringify(persona));
  res.end();

})


  .listen(8080);


console.log('Escuchando en el puerto : ', 8080);