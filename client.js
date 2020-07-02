const { IP, PORT } = require('./constants');

const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
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