import { useState } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { Composer } from '../Composer/Composer';
import { MessageCircle, Settings } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  const handleMessage = (message: string) => {
    console.log('Message sent:', message);
    // Here we'll handle the message processing
  };

  return (
    <div className="flex flex-col h-screen">
      <Toolbar.Root className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <Toolbar.Button
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          onClick={() => setIsComposerOpen(true)}
        >
          <MessageCircle className="w-5 h-5" />
        </Toolbar.Button>
        <Toolbar.Separator className="mx-2 w-[1px] bg-gray-200 dark:bg-gray-700" />
        <Toolbar.Button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          <Settings className="w-5 h-5" />
        </Toolbar.Button>
      </Toolbar.Root>

      <main className="flex-1 overflow-auto">
        {children}
      </main>

      <Composer
        isOpen={isComposerOpen}
        onOpenChange={setIsComposerOpen}
        onSend={handleMessage}
      />
    </div>
  );
} 