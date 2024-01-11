import EditModal from "./EditModal";
function Card({ title, body, idx }) {
    return (
        <>
            <div className="col-md-4 pb-4">
                <div className="card">
                    <div className="ms-auto z-2">
                        <button className="btn btn-sm btn-outline-danger d-flex align-items-center mt-2 me-3">
                            <span className="pe-1">Delete</span>
                            <i className="bi bi-trash3 fs-6"></i>
                        </button>
                    </div>
                    <div className="card-block mx-2 mt-2">
                        <h4 className="card-title">{title}</h4>
                        <h6 className="card-subtitle text-muted">Support card subtitle</h6> 
                    </div>
                    <a type="button" className="stretched-link" data-bs-toggle="collapse" data-bs-target={"#edit" +idx}></a>
                </div>
            </div>
            
        </>
    );
}

export default Card;