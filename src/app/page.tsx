'use client';

import { MainLayout } from '@/components/Layout/MainLayout';
import { MonacoEditor } from '@/components/Editor/MonacoEditor';
import { useState } from 'react';

export default function Home() {
  const [code, setCode] = useState('// Start typing your code here...');

  return (
    <MainLayout>
      <div className="h-full p-4">
        <MonacoEditor
          value={code}
          onChange={setCode}
          language="typescript"
        />
      </div>
    </MainLayout>
  );
}
