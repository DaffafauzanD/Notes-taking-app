import { useContext, useEffect, useRef } from "react";
import { EditorContext } from "./EditorContext";

function ShowNote() {
    const { initEditor } = useContext(EditorContext)
    const editorRef = useRef(null)

    useEffect(() => {
        if (!editorRef.current) {
            initEditor()
            editorRef.current = true

        }
    }, [])

    return (
        <>
            <div className="col ps-md-2 pt-2">
                <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-1 text-decoration-none"><i className="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
                <div id="editorjs"></div>
            </div>
            <div className="collapse" id="note">
                
                <div>
                    <button className="btn btn-primary">save</button>
                    <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#note">Close</button>
                </div>
            </div>
        </>
    );
}

export default ShowNote