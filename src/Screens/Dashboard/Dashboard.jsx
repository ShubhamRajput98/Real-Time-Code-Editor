import React, { useRef, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { CodeEditor } from './components/CodeEditor';
// import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
import { files } from '../../assets/DummyJson/Json';
import { Themes } from '../../assets/DummyJson/Json';
import { Header } from '../../Shared/Header/Header';



export const Dashboard = () => {
  // const dispatch = useDispatch()
  // const { data, loading } = useSelector(state => state.product)
  const [code, setCode] = useState('');
  const [fileName, setFileName] = useState('script.js');
  const [theme, setTheme] = useState('vs-dark');
  const file = files[fileName];

  const [output, setOutput] = useState('');


  const runCode = () => {
    try {
      // Clear previous output
      setOutput('');

      const result = eval(code);

      // Dispose of the model and disposable
      //   model.dispose();
      //   disposable.dispose();

      // Set the output
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }


  const handleCodeChange = newCode => {
    setCode(newCode);
  };


  return (
    <div className="dahsboard">
      <Header 
      files={files} 
      lngChange={(e) => setFileName(e.target.value)} 
      Themes={Themes} 
      theme={theme} 
      themeChange={(e) => setTheme(e.target.value)}
      />

      <CodeEditor 
      code={code} 
      onChange={handleCodeChange} 
      file={file} theme={theme} 
      handleEditorDidMount={handleEditorDidMount}
      />
    </div>
  )
}


