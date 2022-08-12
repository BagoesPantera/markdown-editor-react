import { useContext, useEffect } from "react";

import Context from "../../../ContextProvider";



export default function PreviewMarkdown() {
    const { code } = useContext(Context);
    
    return (
        <div className="font-monospace bg-success w-100 vh-100 bg-dark text-light">
            {code
            .split("\n")
            .map((line, i) =>   <><p key={i} className="my-0">{line} </p></>)
            }
        </div>
    )
}