import React from 'react';
import { Editor } from '@monaco-editor/react';

export const CodeEditor = ({ code, onChange, file }) => {

    return (
        <Editor
            width="100%"
            height="570px"
            value={code}
            language='javascript'
            onChange={onChange}
            theme='vs-dark'
            path={file.name}
            defaultValue={file.value}
            defaultLanguage={file.language}
            selectOnLineNumbers= {true}
            automaticLayout= {true}
            options={{
                scrollBeyondLastLine:false,
                wordWrap:"on",
                minimap:{enabled:true},
                folding:false,
                lineNumbersMinChars:3,
                automaticLayout:true
            }}
        />
    )
}
