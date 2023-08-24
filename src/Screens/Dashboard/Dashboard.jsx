import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { CodeEditor } from './components/CodeEditor';
// import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
import { files } from '../../assets/DummyJson/Json';



export const Dashboard = () => {
    // const dispatch = useDispatch()
    // const { data, loading } = useSelector(state => state.product)
    const [code, setCode] = useState('');
    const [fileName, setfileName] = useState('script.js');
    const file = files[fileName];

    const [output, setOutput] = useState('');

    
  const runCode = () => {
    try {
      // Clear previous output
      setOutput('');

      const result = eval(code);

      // Set the output
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };


    const handleCodeChange = newCode => {
        setCode(newCode);
    };


    return (
        <div className="py-4 dahsboard">
            <button onClick={runCode}>Run Code</button>
      <pre>{output}</pre>
            <CodeEditor code={code} onChange={handleCodeChange} file={file}/>
        </div>
    )
}


