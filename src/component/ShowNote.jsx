import { useContext,useEffect,useRef } from "react";
import { EditorContext } from "./EditorContext";

function ContentModal() {
    const {initEditor} = useContext(EditorContext)
    const editorRef = useRef(null)

    useEffect(()=>{
        if (!editorRef.current) {
            initEditor()
            editorRef.current = true
            
        }
    },[])
    
    return (
        <>
            <div className="collapse" id="note">
            <div id="editorjs"></div>
                <div>
                    <button className="btn btn-primary">save</button>
                    <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#note">Close</button>
                </div>
            </div>
        </>
    );
}

export default ContentModal