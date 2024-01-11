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
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-bootstrap"></i> <span>Item</span> </a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-film"></i> <span>Item</span></a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-heart"></i> <span>Item</span></a>
                                <button className="btn btn-primary d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#note">
                                    <span className="pe-2">New note</span>
                                    <i className="bi bi-journal-plus fs-2"></i>
                                </button>

                                <button className="btn btn-primary d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#CardShow">
                                    <span className="pe-2">Show note</span>
                                    <i className="bi bi-journal-plus fs-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ShowNote />
                    <EditModal />
                </div>
            </div>
        </>
    );
}

export default SideBar;