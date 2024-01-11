import EditModal from "./EditModal";
import ShowNote from "./ShowNote";

function SideBar() {
    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto px-0">
                        <div id="sidebar" className="collapse collapse-horizontal show border-end">
                            <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-toggle="collapse" data-bs-target="#note"><i className="bi bi-bootstrap"></i> <span>New Note</span> </a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-toggle="collapse" data-bs-target="#CardShow"><i className="bi bi-film"></i> <span>Show Note</span></a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar" ><i className="bi bi-heart"></i> <span>Item</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col ps-md-2 pt-2">
                        <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-1 text-decoration-none">
                            <i className="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
                        <ShowNote />
                        <EditModal />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBar;