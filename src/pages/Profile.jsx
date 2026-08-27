import PostCard from "../components/PostCard";
import profiles from "../data/profiles";

function Profile({ posts, actions, actionTypes, onAction }) {
    const profile = profiles.profile.find(
        (item) => item.profileId === 1
    );
    const myPosts = posts.filter(
        (post) => post.profileId === 1
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
                    <p>@{profile?.profileName?.toLowerCase().replaceAll(" ", "") || "unknown"}</p>
                    <span>{profile?.desc || ""}</span>
                </div>
                <button className="edit-profile">
                    Edit Profile
                </button>
            </section>
            <div className="profile-stats">
                <div>
                    <strong>128</strong>
                    <span>Followers</span>
                </div>
                <div>
                    <strong>56</strong>
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
                    />
                ))}
            </section>
        </main>
    );
}

export default Profile;