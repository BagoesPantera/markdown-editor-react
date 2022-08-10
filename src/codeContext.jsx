import { createContext } from "react";

const codeContext = {
    code: "",
    setCode: () => {},
    wordCount: 0,
    setWordCount: () => {},
    charCount: 0,
    setCharCount: () => {},
    title: "",
    setTitle: () => {}
};

export default createContext(codeContext);