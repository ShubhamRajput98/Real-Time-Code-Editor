import React, { useRef } from 'react';
import { Editor } from '@monaco-editor/react';



export const CodeEditor = ({ code, onChange, file, theme, handleEditorDidMount }) => {

  return (
    <Editor
      width="100%"
      height="530px"
      onMount={handleEditorDidMount}
      value={code}
      language={file.language.toLowerCase()}
      onChange={onChange}
      theme={theme}
      path={file.name}
      defaultValue={file.value}
      defaultLanguage={file?.language}
      selectOnLineNumbers={true}
      automaticLayout={true}
      options={{
        scrollBeyondLastLine: false,
        wordWrap: "on",
        minimap: { enabled: true },
        folding: false,
        lineNumbersMinChars: 3,
        automaticLayout: true
      }}
    />
  )
}


