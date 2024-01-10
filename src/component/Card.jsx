import EditModal from "./EditModal";
function Card({title,body,idx}) {
    return (
        <>
            <li className="nav-item">
                <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target={"#edit" + idx}>{title}</button>
            </li>
            
            
        </>
    );
}

export default Card;