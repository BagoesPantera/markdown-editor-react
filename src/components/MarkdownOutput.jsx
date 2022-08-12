import ReactMarkdownComponent from "./ReactMarkdownComponent";

export default function MarkdownOutput(){
    return(
        <div className="w-50 text-break ps-2">
            <p className="mt-3 text-muted text-small font-monospace fw-bold">PREVIEW</p>
            <hr className="mb-0"/>
            <div className="w-100 overflow-auto " style={{height:"91%"}}>
                <ReactMarkdownComponent />
            </div>
        </div>
    )
}