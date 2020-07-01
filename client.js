const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    //conn.write('Name: Yoo');
    // setTimeout(() => {
    //   setInterval(() => {
    //     conn.write('Move: up')
    //   }, 50);
    //   }, 800);

  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Message from client: ', data);
  });

  return conn;
};

const util = {
  connect
};

module.exports = util;