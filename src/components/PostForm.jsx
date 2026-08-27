import { useState } from "react";

function PostForm({ onAddPost }) {
    const [content, setContent] = useState("");
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
                D
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