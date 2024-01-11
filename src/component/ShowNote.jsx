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
                    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="editorjs"></div>
                </div>
                <div>
                    <a type="button" className="border rounded-3 p-2 text-decoration-none">Save</a>
                    <a type="button" className="border rounded-3 p-2 text-decoration-none" data-bs-toggle="collapse" data-bs-target="#note">Close</a>
                </div>
            </div>
        </>
    );
}

export default ShowNote