import PostCard from "../components/PostCard";
import profiles from "../data/profiles";

function Profile({ posts, actions, actionTypes, onAction, currentProfileId }) {
    const profile = profiles.profile.find(
        (item) => item.profileId === currentProfileId
    );
    const myPosts = posts
        .filter((post) => post.profileId === currentProfileId)
        .sort((firstPost, secondPost) =>
            new Date(secondPost.timestamp) - new Date(firstPost.timestamp)
        );
    return (
        <main className="page-container">
            <section className="profile-header">
                <div className="profile-avatar">
                    {profile?.imageUrl ? (
                        <img src={profile.imageUrl} alt={profile.profileName} />
                    ) : (
                        profile?.profileName?.charAt(0) || "U"
                    )}
                </div>
                <div className="profile-info">
                    <h1>{profile?.profileName || "Unknown"}</h1>
                    <p>{profile?.desc || ""}</p>
                    <span>
                        @{profile?.profileName?.toLowerCase().replaceAll(" ", "") || "unknown"}
                    </span>
                </div>
               
                <button className="edit-profile">
                    Edit Profile
                </button>
            </section>
            <div className="profile-stats">
                <div>
                    <strong>1280</strong>
                    <span>Followers</span>
                </div>
                <div>
                    <strong>560</strong>
                    <span>Following</span>
                </div>
            </div>
            <div className="profile-tabs">
                <button className="tab active">
                    Posts
                </button>
                <button className="tab">
                    Replies
                </button>
                <button className="tab">
                    Media
                </button>
            </div>
            <section className="timeline">
                {myPosts.map((post) => (
                    <PostCard
                        key={post.postId}
                        post={post}
                        actions={actions}
                        actionTypes={actionTypes}
                        onAction={onAction}
                        currentProfileId={currentProfileId}
                        />
                ))}
            </section>
        </main>
    );
}
export default Profile;