import { useContext } from "react";
import Context from "../ContextProvider";

import ReactMarkdownComponent from "./ReactMarkdownComponent";

export default function MarkdownOutput(){
    const { showPreview } = useContext(Context);
    return(
        <div className={`text-break ps-2 w-100 w-md-50 d-md-inline ${showPreview ? "d-inline" : "d-none"}`}>
            <p className="mt-3 text-muted text-small font-monospace fw-bold">PREVIEW</p>
            <hr className="mb-0"/>
            <div className="w-100 overflow-auto " style={{height:"91%"}}>
                <ReactMarkdownComponent />
            </div>
        </div>
    )
}