import { useContext, useEffect, useState } from "react";
import Context from "../ContextProvider";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const { code } = useContext(Context);
    const { title } = useContext(Context);
    const [same, setSame] = useState('nav-link');

    const navigate = useNavigate();

    const downloadMdFile = () => {
        const element = document.createElement("a");
        const file = new Blob([code], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = `${title}.md`;
        document.body.appendChild(element);
        element.click();
    };

    const saveMarkdown = () => {
        localStorage.setItem("markdown", code);
        setSame('nav-link disabled');
    }

    useEffect(() => {
      if(localStorage.getItem("markdown") === code){
        setSame('nav-link disabled');
      }else{
        setSame('nav-link');
      }
    }, [code])
    

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark font-monospace">
            <div className="container-fluid">
                <a className="navbar-brand">MARDI</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarColor02">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-4">
                            <a className={same} aria-current="page" onClick={()=> {saveMarkdown()}}>SAVE</a>
                        </li>
                        <li className="nav-item dropdown me-4">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PREVIEW AS</a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a  className="dropdown-item" target="_blank" onClick={()=>{navigate('/preview/markdown')}}>MARKDOWN</a>
                                <a  className="dropdown-item" target="_blank" onClick={()=>{navigate('/preview/html')}}>HTML</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">EXPORT AS</a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" onClick={downloadMdFile}>MARKDOWN</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}