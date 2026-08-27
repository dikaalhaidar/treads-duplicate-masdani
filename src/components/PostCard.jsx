import { FaHeart, FaRegHeart, FaRetweet, FaShare } from "react-icons/fa";
import profiles from "../data/profiles";

const actionIcons = {
    Like: { active: <FaHeart />, inactive: <FaRegHeart /> },
    Repost: { active: <FaRetweet />, inactive: <FaRetweet /> },
    Share: { active: <FaShare />, inactive: <FaShare /> },
};

function PostCard({ post, actions, actionTypes, onAction }) {
    const profile = profiles.profile.find(
        (item) => item.profileId === post.profileId
    );
    const postActions = actions.filter(
        (action) => action.postId === post.postId
    );
    
    return (
        <article className="post-card">
            <div className="post-avatar">
                <div className="avatar">
                    {profile?.profileName?.charAt(0) || "U"}
                </div>
            </div>
            
            <div className="post-body">
                <div className="post-meta">
                    <h3>{profile?.profileName || "Unknown"}</h3>
                    <span>@{profile?.profileName?.toLowerCase().replaceAll(" ", "") || "unknown"}</span>
                </div>
                
                <p className="post-content">
                    {post.desc}
                </p>
                
                <div className="post-actions">
                    {actionTypes.map((actionType) => {
                        const actionCount = postActions.filter(
                            (action) => action.actionTypeId === actionType.actionTypeId
                        ).length;
                        const isActive = postActions.some(
                            (action) =>
                                action.actionTypeId === actionType.actionTypeId &&
                                action.profileId === 1
                        );
                        const icon = actionIcons[actionType.actionTypeName];

                        return (
                            <button
                                key={actionType.actionTypeId}
                                onClick={() => onAction(post.postId, actionType.actionTypeId)}
                                className={isActive ? "action-button liked" : "action-button"}
                                aria-label={actionType.actionTypeName}
                            >
                                {isActive ? icon.active : icon.inactive}
                                <span>{actionCount}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </article>
    );
}

export default PostCard;