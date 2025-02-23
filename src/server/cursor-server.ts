import { Server } from 'socket.io';
import { createServer } from 'http';
import next from 'next';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });

  const io = new Server(server, {
    path: '/cursor',
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', async (data) => {
      try {
        // Here we'll implement the actual communication with Cursor
        // This will involve sending commands to Cursor's extension API
        console.log('Received message:', data);

        // Example response
        socket.emit('response', {
          status: 'success',
          message: 'Message received',
        });
      } catch (error) {
        console.error('Error processing message:', error);
        socket.emit('error', {
          status: 'error',
          message: 'Failed to process message',
        });
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  const PORT = process.env.PORT || 3001;
  server.listen(PORT, () => {
    console.log(`> Server listening on port ${PORT}`);
  });
}); 