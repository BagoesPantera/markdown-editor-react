import { useEffect, useContext } from "react";
import Context from "../ContextProvider";

export default function Title(){
    const { code, setCode } = useContext(Context);
    const { wordCount, setWordCount } = useContext(Context);
    const { charCount, setCharCount } = useContext(Context);
    const { title, setTitle } = useContext(Context);

    useEffect(() => {
        setWordCount(code.split(' ').length);
        setCharCount(code.length);
    } , [code]);

    return(
        <div className="d-flex font-monospace">
            <div className="w-50">
                <p className="fw-bold text-muted text-small mb-1">TITLE</p>
                <input type="text" className="title-input border-0 w-75" value={title} onChange={(e) => { e.target.value }}/>
            </div>
            <div className=" w-50 text-end text-muted text-small mt-auto">
                <span>WORDS: <b>{wordCount}</b></span><br />
                <span>CHARACTERS: <b>{charCount}</b></span>
            </div>
        </div>
    );
}