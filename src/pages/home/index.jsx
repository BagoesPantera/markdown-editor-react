import './home.css';

// components
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import MarkdownInput from "../../components/MarkdownInput";
import MarkdownOutput from "../../components/MarkdownOutput";

export default function Home(){
// d-sm-block d-md-flex d-lg-flex d-xl-flex d-xxl-flex 
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