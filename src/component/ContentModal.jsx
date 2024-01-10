function ContentModal() {
    return (
        <>
            <div className="collapse" id="note">
                Content area...
                <div>
                    <button className="btn btn-primary">save</button>
                    <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#note">Close</button>
                </div>
            </div>
        </>
    );
}

export default ContentModal