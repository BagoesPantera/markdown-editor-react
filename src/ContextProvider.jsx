import { createContext, useState } from "react";

import defaultInput from "./const/defaultInput";

const Context = createContext(null);

export function ContextProvider({ children }) {
    const [code, setCode] = useState(defaultInput);
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [title, setTitle] = useState('Untitled Document');

    const contextValue = {
        code,
        setCode,
        wordCount,
        setWordCount,
        charCount,
        setCharCount,
        title,
        setTitle
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>

}

export default Context;