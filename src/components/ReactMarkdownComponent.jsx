import { useContext } from "react";
import Context from "../ContextProvider";

import  ReactMarkdown from "react-markdown";

// remark
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'

// rehype
import rehypeRaw from "rehype-raw";
import rehypeSanitize, {defaultSchema} from "rehype-sanitize";
import rehypeHighlight from 'rehype-highlight'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function ReactMarkdownComponent(){
    const { code } = useContext(Context);

    return(
        <div className="md-output">
            <ReactMarkdown 
                children={code} 
                remarkPlugins={[remarkGfm, remarkGemoji]}
                rehypePlugins={[rehypeRaw, 
                    // [rehypeSanitize, {
                    //       ...defaultSchema,
                    //       attributes: {
                    //         ...defaultSchema.attributes,
                    //         code: [
                    //             // dont know how to auto all languages
                    //             ...(defaultSchema.attributes.code || []),
                    //             ['className', 'language-go', 'language-js']
                    //         ],
                    //       }}
                    //     ],
                    ]}
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
                    table({children}) {
                        return (
                            <table className='table w-50'>
                                {children}
                            </table>
                        )
                    },
                    thead({children}) {
                        return (
                            <thead className="table-dark">
                                {children}
                            </thead>
                        )
                    }
                }}
            />
        </div>
    )
}
