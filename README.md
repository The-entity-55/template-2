# Cursor Interface

A modern web-based interface for interacting with Cursor, a VS Code fork. This project provides a seamless way to interact with Cursor's AI capabilities through a web interface.

## Features

- Monaco Editor integration for code editing
- Real-time communication with Cursor through WebSocket
- Modern UI with dark mode support
- Composer interface for AI interactions
- Responsive layout

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Cursor installed locally

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cursor-interface.git
cd cursor-interface
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev:all
```

This will start both the Next.js development server and the WebSocket server.

- Next.js server will run on `http://localhost:3000`
- WebSocket server will run on `http://localhost:3001`

## Project Structure

```
cursor-interface/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── Composer/    # AI interaction interface
│   │   ├── Editor/      # Monaco editor components
│   │   └── Layout/      # Layout components
│   └── server/          # WebSocket server
├── public/              # Static assets
└── package.json         # Project dependencies
```

## Development

- `npm run dev` - Start the Next.js development server
- `npm run server` - Start the WebSocket server
- `npm run dev:all` - Start both servers concurrently
- `npm run build` - Build the production application
- `npm run start` - Start the production server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Cursor](https://cursor.sh/) - The AI-first code editor
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - The code editor that powers VS Code
- [Next.js](https://nextjs.org/) - The React Framework
- [Socket.IO](https://socket.io/) - Real-time bidirectional event-based communication