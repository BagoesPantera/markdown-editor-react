import { useContext, useEffect } from "react";

import Context from "../../../ContextProvider";
import ReactMarkdownComponent from "../../../components/ReactMarkdownComponent";


export default function PreviewMarkdown() {
    const { code } = useContext(Context);

    return (
        <div className="container-fluid font-monospace bg-dark text-light min-vh-100">
            {code
            .split("\n")
            .map((line, i) =>   <><p key={i} className="my-0">{line} </p></>)
            }
        </div>
    )
}