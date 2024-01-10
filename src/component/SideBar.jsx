import Card from "./Card";

function SideBar() {

    const dummyNotes = [
        {
            title: 'Meeting Agenda',
            body: 'Our team meeting agenda for this week includes discussing project updates, addressing any concerns or roadblocks, and planning for the upcoming sprint. We will review the progress made in the last week, evaluate the current status of tasks, and collaborate on strategies to improve efficiency. Additionally, we will allocate responsibilities for specific tasks and set goals for the next sprint. Its essential that everyone comes prepared with their updates and ideas to make our meeting productive and insightful.',
            id: 1
        },
        {
            title: 'Shopping List',
            body: 'For this weeks groceries, we need to buy a variety of items. The shopping list includes essentials like milk, eggs, and bread. We also need to stock up on fresh vegetables, such as spinach, carrots, and bell peppers. Dont forget to add a selection of fruits, like apples, bananas, and oranges, to ensure a balanced diet. In addition to the basics, consider checking the pantry for any items running low and add them to the list. Planning ahead and having a comprehensive shopping list will help streamline the grocery shopping process.',
            id: 2
        },
        {
            title: 'Book Recommendations',
            body: 'This months book recommendations feature two classic novels that are worth exploring. `The Great Gatsby` by F. Scott Fitzgerald is a timeless tale of love, wealth, and societal expectations set in the Roaring Twenties. Another compelling read is To Kill a Mockingbird by Harper Lee, which addresses themes of racial injustice and moral growth in the American South. Both books offer thought-provoking narratives and rich character development. Consider adding them to your reading list and immerse yourself in these literary masterpieces.',
            id: 3
        },
        {
            title: 'Fitness Goals',
            body: 'To achieve your fitness goals, its important to maintain a consistent workout routine. Aim for three days of cardio exercises, such as running, cycling, or swimming, to improve cardiovascular health. Additionally, incorporate two days of strength training, focusing on different muscle groups each session. Include a mix of compound exercises and isolation exercises to target various muscle fibers. Remember to stay hydrated, get an adequate amount of sleep, and listen to your body to prevent injuries. Consistency is key to making progress and achieving your fitness objectives.',
            id: 4
        },
        {
            title: 'Travel Plans',
            body: 'As we plan our summer vacation to Europe, there are several key aspects to consider. Research and finalize the destinations you want to visit, taking into account cultural attractions, historical landmarks, and natural wonders. Create a rough itinerary outlining the activities and sights for each day. Check for any travel restrictions or visa requirements for the chosen destinations. Look into accommodation options that suit your preferences and budget. Dont forget to plan transportation between cities and countries. With thorough preparation, we can ensure a smooth and enjoyable travel experience.',
            id: 5}
      ]

    return (
        <>
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">Menu</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="#" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                            <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            </ul>
                        </li>
                        {dummyNotes.map(note =>{
                            return <Card title={note.title} body={note.body} idx={note.id} key={note.id}/>
                        })}
                        <li>
                            <button className="btn btn-primary d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#note">
                                <span className="pe-2">New note</span>
                                <i className="bi bi-journal-plus fs-2"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default SideBar;