import { useState } from "react";
import profiles from "../data/profiles";

function PostForm({ profileId, onAddPost }) {
    const [content, setContent] = useState("");
    const profile = profiles.profile.find(
        (item) => item.profileId === profileId
    );
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!content.trim()) {
            return;
         }
        onAddPost(content);
        setContent("");
    };
    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <div className="avatar">
                {profile?.imageUrl ? (
                    <img src={profile.imageUrl} alt={profile.profileName} />
                ) : (
                    profile?.profileName?.charAt(0) || "U"
                )}
            </div>
            <div className="post-form-content">

                <textarea
                    placeholder="What's happening?"
                    value={content}
                    maxLength={280}
                    onChange={(event) =>
                        setContent(event.target.value)
                    }
                />
                <div className="post-form-bottom">
                    <span>
                        {content.length}/280
                    </span>
                    <button
                        type="submit"
                        disabled={!content.trim()}>
                        Post
                    </button>
                </div>
            </div>
        </form>
    );
}

export default PostForm;