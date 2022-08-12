import { useContext, useEffect, useState } from "react";
import Context from "../ContextProvider";
import { Link } from "react-router-dom";

export default function Navbar(){
    const { code, title, showPreview, setShowPreview } = useContext(Context);
    const [same, setSame] = useState(false);

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
        localStorage.setItem("title", title);
        setSame(true);
    }

    useEffect(() => {
      if(localStorage.getItem("markdown") === code && localStorage.getItem("title") === title){
        setSame(true);
      }else{
        setSame(false);
      }
    }, [code, title])
    

    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark font-monospace">
            <div className="container-fluid">
                <a className="navbar-brand">MARDI</a>

                <ul className="navbar-nav ms-auto d-flex">
                    <li className="nav-item me-4 d-md-none">
                        <a className="nav-link" aria-current="page" onClick={()=>{setShowPreview(!showPreview)}}>
                            <i className={`bi ${showPreview ? "bi-eye-slash-fill" : "bi-eye-fill"} `}></i>
                        </a>
                    </li>
                   
                </ul>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarColor02">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-4">
                            <a className={`nav-link ${same ? "disabled" : ""}`} aria-current="page" onClick={()=> {saveMarkdown()}}>SAVE</a>
                        </li>
                        <li className="nav-item dropdown me-4">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PREVIEW AS</a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <Link className="dropdown-item" to="/preview/markdown" target="_blank" onClick={()=> {saveMarkdown()}}>MARKDOWN</Link>
                                <Link className="dropdown-item" to="/preview/html" target="_blank" onClick={()=> {saveMarkdown()}}>HTML</Link>
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