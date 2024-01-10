
import Card from "./component/Card"
import ContentModal from "./component/ContentModal"
import EditModal from "./component/EditModal"
import SideBar from "./component/SideBar"

function App() {
  


  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <SideBar/>
          <ContentModal />
          <EditModal />

        </div>
      </div>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <a href="" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4">Note Taking</span>
        </a>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
