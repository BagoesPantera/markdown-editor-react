import './home.css';

// components
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import MarkdownInput from "../../components/MarkdownInput";
import MarkdownOutput from "../../components/MarkdownOutput";
import { useEffect } from "react";

export default function Home(){
// d-sm-block d-md-flex d-lg-flex d-xl-flex d-xxl-flex 
    useEffect(()=>{
        const editor = document.getElementById("editor-scroll");
        const preview = document.getElementById("preview-scroll");
        if(!editor || !preview) return;

        let syncingFromEditor = false;
        let syncingFromPreview = false;

        const syncScroll = (source, target) => {
            const sourceMax = source.scrollHeight - source.clientHeight;
            const targetMax = target.scrollHeight - target.clientHeight;
            if (sourceMax <= 0 || targetMax <= 0) return;
            const percent = source.scrollTop / sourceMax;
            target.scrollTop = percent * targetMax;
        };

        const onEditorScroll = () => {
            if (syncingFromPreview) return;
            syncingFromEditor = true;
            syncScroll(editor, preview);
            syncingFromEditor = false;
        };

        const onPreviewScroll = () => {
            if (syncingFromEditor) return;
            syncingFromPreview = true;
            syncScroll(preview, editor);
            syncingFromPreview = false;
        };

        editor.addEventListener("scroll", onEditorScroll, { passive: true });
        preview.addEventListener("scroll", onPreviewScroll, { passive: true });

        return () => {
            editor.removeEventListener("scroll", onEditorScroll);
            preview.removeEventListener("scroll", onPreviewScroll);
        };
    }, []);
    return(
        <>
            <Navbar></Navbar>
            <div className="container-fluid mt-2" style={{height:'82vh'}}>
                <Title></Title>
                <div className="d-flex h-100 border-top mt-2">
                    <MarkdownInput></MarkdownInput>
                        <MarkdownOutput></MarkdownOutput>
                    
                </div>
            </div>
        </>
    )
}
