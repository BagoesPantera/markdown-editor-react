import { useContext } from "react";
import Context from "../ContextProvider";

import Editor from "react-simple-code-editor";
import { highlight, languages } from 'prismjs';
import "prismjs/components/prism-markdown";
import "prismjs/themes/prism.css";

import defaultInput from "../const/defaultInput";

export default function MarkdownInput(){
    const { code, setCode } = useContext(Context);

    const hightlightWithLineNumbers = (input, language) =>
    highlight(input, language)
        .split("\n")
        .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
        .join("\n");

    const handleClear = () => {
        setCode("");
    }

    const handleReset = () => {
        localStorage.removeItem("markdown");
        setCode(defaultInput);
    }
    
    return(
        <div className="w-50 border-end text-break pe-2">
            <div className="d-flex w-100 m-0">
                <div className="w-50">
                    <p className="mt-3 text-muted text-small font-monospace fw-bold">MARKDOWN</p>
                </div>
                <div className="float-end w-50 my-auto">
                    <button type="button" className="btn btn-outline-danger btn-rounded btn-sm float-end" data-mdb-ripple-color="dark" onClick={()=>{handleClear()}} data-bs-toggle="tooltip" title="Clear markdown"><i className="bi bi-trash"></i> </button>
                    <button type="button" className="btn btn-outline-primary btn-rounded btn-sm float-end me-3" data-mdb-ripple-color="dark" onClick={()=>{handleReset()}} data-bs-toggle="tooltip" title="Reset markdown"><i class="bi bi-arrow-counterclockwise"></i> </button>
                </div>
            </div>
            
            <hr className="my-0"/>
            <div className="w-100 overflow-auto " style={{height:"91%"}}>
                <Editor
                    value={code}
                    onValueChange={code => setCode(code)}
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
                
        </div>
    );
}