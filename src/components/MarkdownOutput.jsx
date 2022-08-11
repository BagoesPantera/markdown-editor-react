import { useContext } from "react";
import codeContext from "../codeContext";

import  ReactMarkdown from "react-markdown";

// remark
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'

// rehype
import rehypeRaw from "rehype-raw";
import rehypeSanitize, {defaultSchema} from "rehype-sanitize";

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function MarkdownOutput(){
    const { code } = useContext(codeContext);

    return(
        <div className="w-50 text-break ps-2">
            <p className="mt-3 text-muted text-small font-monospace fw-bold">PREVIEW</p>
            <hr className="mb-0"/>
            <div className="w-100 overflow-auto " style={{height:"91%"}}>
                <ReactMarkdown 
                    children={code} 
                    remarkPlugins={[remarkGfm, remarkGemoji]}
                    rehypePlugins={[rehypeRaw]}
                    className="md-output"
                    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={dracula}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                            <code className={className} {...props}>
                            {children}
                            </code>
                        )
                        },
                        table({node, inline, className, children, ...props}) {
                            return (
                                <table className='table w-50' {...props}>
                                    {children}
                                </table>
                            )
                        },
                        thead({node, inline, className, children, ...props}) {
                            return (
                                <thead className="table-dark">
                                    {children}
                                </thead>
                            )
                        }
                    }}
                />
            </div>
            
        </div>
    )
}