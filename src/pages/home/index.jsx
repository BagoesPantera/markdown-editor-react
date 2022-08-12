import './home.css';

// components
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import MarkdownInput from "../../components/MarkdownInput";
import MarkdownOutput from "../../components/MarkdownOutput";

export default function Home(){

    return(
        <>
            <Navbar></Navbar>
            <div className="container-fluid mh-100 mt-2" style={{height:'82vh'}}>
                <Title></Title>
                <div className="h-100 border-top d-flex mt-2">
                    <MarkdownInput></MarkdownInput>
                    <MarkdownOutput></MarkdownOutput>
                </div>
            </div>
        </>
            
    )
}