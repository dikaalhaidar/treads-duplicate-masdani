import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

function Home({ posts, actions, actionTypes, onAddPost, onAction }) {
    return (
        <main className="page-container home-page">

            <section className="page-header">
                <h1>Home</h1>
                <p>Your timeline</p>
            </section>
            <PostForm onAddPost={onAddPost} />
            <section className="timeline">

                {posts.map((post) => (
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

export default Home;