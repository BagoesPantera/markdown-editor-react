import { useContext } from "react";
import codeContext from "../codeContext";

import Editor from "react-simple-code-editor";
import { highlight, languages } from 'prismjs';
import "prismjs/components/prism-markdown";
import "prismjs/themes/prism.css";

export default function MarkdownInput(){
    const { code, setCode } = useContext(codeContext);

    const hightlightWithLineNumbers = (input, language) =>
    highlight(input, language)
        .split("\n")
        .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
        .join("\n");
    
    return(
        <div className="w-50 border-end text-break pe-2">
            <p className="mt-3 text-muted text-small font-monospace fw-bold">MARKDOWN</p>
            <hr />
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
    );
}