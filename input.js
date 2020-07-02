/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  let w = 'Move: up';
  let s = 'Move: down';
  let a = 'Move: left';
  let d = 'Move: right';
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
    if (key === 'a') {
      connection.write(a);
    }
    if (key === 's') {
      connection.write(s);
    }
    if (key === 'w') {
      connection.write(w);
    }
    if (key === 'd') {
      connection.write(d);
    }
  });
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

const setIn = {
  setupInput
};

module.exports = setIn;