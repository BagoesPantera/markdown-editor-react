import { useEffect, useContext } from "react";
import codeContext from "../codeContext";

export default function Title(){
    const { code, setCode } = useContext(codeContext);
    const { wordCount, setWordCount } = useContext(codeContext);
    const { charCount, setCharCount } = useContext(codeContext);
    const { title, setTitle } = useContext(codeContext);

    useEffect(() => {
        setWordCount(code.split(' ').length);
        setCharCount(code.length);
    } , [code]);

    return(
        <div className="d-flex font-monospace">
            <div className="w-50">
                <p className="fw-bold text-muted text-small">TITLE</p>
                <input type="text" className="title-input border-0 w-75" value={title} onChange={(e) => { e.target.value }}/>
            </div>
            <div className=" w-50 text-end text-muted text-small">
                <span>WORDS: <b>{wordCount}</b></span><br />
                <span>CHARACTERS: <b>{charCount}</b></span>
            </div>
        </div>
    );
}