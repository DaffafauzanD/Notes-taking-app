function EditModal({title,body,idx}) {
    return (
        <>
            <div className={"collapse" + idx} id={"edit" + idx}>
                edit area...
                <h1>{title}</h1>
                <p>{body}</p>
                <div>
                    <button className="btn btn-primary">save</button>
                    <button className="btn btn-primary" data-bs-toggle={"collapse" +idx} data-bs-target={"#edit"+idx}>Close</button>
                </div>
            </div>
        </>
    );
}

export default EditModal