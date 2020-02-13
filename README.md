# metronome

Node-js metronome server for syncing web-audio tools

To run, download this repository and run `npm start 120`, where the number is the tempo you want the clock to maintain. From that
point on, the clock will open a websocket port at `ws://localhost:8888` which web applications can connect to. Sending any messsage
to that websocket will trigger a response with the current time as a floating-point number of beats.
