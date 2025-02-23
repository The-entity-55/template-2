import { useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import * as Dialog from '@radix-ui/react-dialog';
import { MonacoEditor } from '../Editor/MonacoEditor';

interface ComposerProps {
  onSend: (message: string) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Composer({ onSend, isOpen, onOpenChange }: ComposerProps) {
  const [input, setInput] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);

  const connectToCursor = useCallback(() => {
    const newSocket = io('http://localhost:3001', {
      path: '/cursor',
      transports: ['websocket'],
    });

    newSocket.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to Cursor');
    });

    newSocket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from Cursor');
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const handleSend = useCallback(() => {
    if (socket && isConnected) {
      socket.emit('message', { content: input });
      onSend(input);
      setInput('');
    }
  }, [socket, isConnected, input, onSend]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed bottom-0 left-0 right-0 h-1/2 bg-white dark:bg-gray-800 p-4 shadow-lg">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <MonacoEditor
                value={input}
                onChange={setInput}
                language="markdown"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-sm">{isConnected ? 'Connected' : 'Disconnected'}</span>
              </div>
              <button
                onClick={handleSend}
                disabled={!isConnected || !input.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 