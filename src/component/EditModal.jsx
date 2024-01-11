

function EditModal({ title, body, idx }) {

    return (
        <>
            <div className="collapse" id={"edit" + idx}>
                edit area...
                <h4>{title}</h4>
                <div className="d-inline-block text-truncate" >
                    <p>{body}</p>
                </div>
                
                <div className="mb-4">
                    <button className="btn btn-primary">save</button>
                    <button className="btn btn-primary" data-bs-toggle={"collapse" + idx} data-bs-target={"#edit" + idx}>Close</button>
                </div>
            </div>
            
        </>
    );
}

export default EditModal