import React, { useRef, useState } from 'react'
import { CodeEditor } from './components/CodeEditor';
import { files } from '../../assets/DummyJson/Json';
import { Themes } from '../../assets/DummyJson/Json';
import { Header } from '../../Shared/Header/Header';
import { JWTdecoder } from '../../Shared/JWTdecoder/JWTdecoder';





export const Dashboard = () => {
  // store compiler code
  const [code, setCode] = useState('');
  // set file name for compiler
  const [fileName, setFileName] = useState('script.js');
  const [theme, setTheme] = useState('vs-dark');
  const file = files[fileName];
  // jwt decode
  const token = localStorage.getItem('token');
  const userData = JWTdecoder(token)
  // store compiler code output
  // const [output, setOutput] = useState('');
  // dropdown toggel
  const [open, setOpen] = useState(false)

  const editorRef = useRef(null);


  // run compiler code and sotre in state output
  // const runCode = () => {
  //   try {
  //     // Clear previous output
  //     setOutput('');

  //     const result = eval(code);

  //     setOutput(result);
  //   } catch (error) {
  //     setOutput(`Error: ${error.message}`);
  //   }
  // };

  // compiler mount function
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  // compiler on chage value(code)
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
        userData={userData}
        open={open}
        onOpen={() => setOpen(!open)}
      />

      <CodeEditor
        code={code}
        onChange={handleCodeChange}
        file={file}
        theme={theme}
        handleEditorDidMount={handleEditorDidMount}
      />
    </div>
  )
}


