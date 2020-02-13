const { performance } = require('perf_hooks');
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8888 });

const tempo = parseInt(process.argv[2]) || 120;

function getBeats() {
  return (performance.now() / 1000) * (tempo / 60);
}

wss.on('connection', ws => {
  ws.on('message', message => {
    ws.send(new Float64Array([getBeats()]));
    console.log('Received request for time');
  });

  console.log('Received connection');
});
