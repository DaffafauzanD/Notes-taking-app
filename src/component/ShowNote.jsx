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

            <div className="collapse" id="note">
                <div>
                    <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="editorjs"></div>
                </div>
                <div>
                    <button className="btn btn-primary">save</button>
                    <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#note">Close</button>
                </div>
            </div>
        </>
    );
}

export default ShowNote