import React from 'react'
import { useState } from 'react'
import "./Editor.css"
import ReactMarkdown from "react-markdown"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Editor() {
  const [code, setCode] = useState("# Enter Your Text Here!");
  const [copied, isCopied]= useState(false);
  
  function codeChange(e) {
    setCode(e.target.value);
    isCopied(e.target.false);
  }
  const textarea= document.getElementById("code-area");

  function clear(){
    setCode("");
    toast.success("Text Cleared Succesfully",{
      position: "top-right",
      autoClose:2000,
      hideProgressBar: false,
      closeOnClick:true,
      draggable:true,
      pauseOnHover:true
    })
  }
  function copy(){
    if(!copied){
      navigator.clipboard.writeText(code);
      toast.success("Text Copied Succesfully",{
        position: "top-right",
        autoClose:2000,
        hideProgressBar: false,
        closeOnClick:true,
        draggable:true,
        pauseOnHover:true
      })
      isCopied(true);
      setTimeout(()=>{
      isCopied(false)
      },1000);
    }
  }
  return (
    <>
     <div className='editor'>
      <div className="codearea">
        <div className="buttons">
          <button onClick={copy}><span className="material-icons">copy_all</span><p>Copy</p></button>
          <button onClick={clear}><span className="material-icons">clear</span><p>Clear</p></button>
        </div>
        <div className="textarea">
        <textarea cols="30" rows="10" id='code-area' onChange={codeChange} value={code}></textarea>
        </div>
      </div>
      <div className="preview">
        <ReactMarkdown className="md-prev">
          {code}
        </ReactMarkdown>
      </div>
      
    </div>
    <ToastContainer />
    </>
  )
}
