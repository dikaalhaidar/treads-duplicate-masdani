const EditProfile = () => {
    function handleSubmit(e) {
        e.preventDefault();
        // Handle form submission logic here
    }
    return(
        <div className="edit-profile">
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="profileName">Profile Name</label>
                    <input type="text" id="profileName" name="profileName" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea id="desc" name="desc"></textarea>
                </div>
                <button type="submit">Save Changes</button>
                </form>
        </div>
    )
}