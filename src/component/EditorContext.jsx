import { createContext, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

export const EditorContext = createContext()

function EditorContextProvider(props) {
    const editorInstanceRef = useRef(null)
    const initEditor = () => {
        const editor = new EditorJS({
            holder: "editorjs",
            placeholder: "write something cool",
            tools: {},
        })
        editorInstanceRef.current = editor
    }
    return (
        <EditorContext.Provider value={{initEditor, editorInstanceRef}}>
            {props.children}
        </EditorContext.Provider>
    );
}

export default EditorContextProvider;