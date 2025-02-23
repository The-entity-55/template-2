import { useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';

interface MonacoEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
}

export function MonacoEditor({ value, onChange, language = 'typescript' }: MonacoEditorProps) {
  const { theme } = useTheme();
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  return (
    <div className="h-full w-full">
      <Editor
        height="100%"
        defaultLanguage={language}
        value={value}
        onChange={(value) => onChange(value || '')}
        theme={theme === 'dark' ? 'vs-dark' : 'light'}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: true },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
} 