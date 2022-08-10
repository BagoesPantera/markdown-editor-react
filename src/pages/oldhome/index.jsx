import { useState, useEffect } from "react";
import codeContext from "../../codeContext";

import  ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'


import Editor from "react-simple-code-editor";
import { highlight, languages } from 'prismjs';
import "prismjs/components/prism-markdown";
import "prismjs/themes/prism.css";

import './index.css';

export default function Home(){
    const [code, setcode] = useState('## Type some code on the left');
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        setWordCount(code.split(' ').length);
        setCharCount(code.length);
    } , [code]);

    const hightlightWithLineNumbers = (input, language) =>
        highlight(input, language)
            .split("\n")
            .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
            .join("\n");

    // https://thewebdev.info/2021/11/20/how-to-download-a-string-as-txt-file-in-react/
    const downloadMdFile = () => {
        const element = document.createElement("a");
        const file = new Blob([code], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.md";
        document.body.appendChild(element);
        element.click();
    };

    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Mardi</a>
            </div>

            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav ms-auto me-3">
                <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Preview As</a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#" onClick={downloadMdFile}>Markdown</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Export As</a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#" onClick={downloadMdFile}>Markdown</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="container-fluid mh-100 mt-2" style={{height:'80vh'}}>
            <div className="text-end">
                <span>Words: <b>{wordCount}</b> Characters: <b>{charCount}</b></span>
            </div>
            <div className="h-100 border-top d-flex mt-2">
                {/* INPUT */}
                <div className="w-50 border-end text-break pe-2">
                    <h5 className="mt-3">Markdown</h5>
                    <hr />
                     <Editor
                        value={code}
                        onValueChange={code => setcode(code)}
                        highlight={code => hightlightWithLineNumbers(code, languages.md)}
                        padding={10}
                        textareaId="codeArea"
                        className="editor"
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 14,
                            outline: 0
                        }}
                        />
                </div>

                {/* RESULT */}
                <div className="w-50 text-break ps-2">
                    <h5 className="mt-3">Preview</h5>
                    
                    <hr />
                    <ReactMarkdown children={code} remarkPlugins={[remarkGfm]}/>
                </div>
            </div>
          
        </div>
        </>
        
    )
}