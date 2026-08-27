import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import initialPosts from "./data/posts";
import initialActions from "./data/action";
import actionTypes from "./data/actionType";

const currentProfileId = 3;

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [actions, setActions] = useState(initialActions);
  
  const handleAction = (postId, actionTypeId) => {
    setActions((currentActions) => {
      const existingAction = currentActions.find(
        (item) =>
          item.postId === postId &&
          item.actionTypeId === actionTypeId &&
          item.profileId === currentProfileId
      );

      if (existingAction) {
        return currentActions.filter(
          (item) => item.actionId !== existingAction.actionId
        );
      }



      return [
        ...currentActions,
        {
          actionId: Date.now(),
          actionTypeId,
          postId,
          profileId: currentProfileId,
        },
      ];
    });
  };

  const handleAddPost = (content) => {

    const newPost = {
      postId: Date.now(),
      profileId: currentProfileId,
      desc: content,
      likes: 0,
      liked: false,
      comments: 0,
      timestamp: new Date().toISOString(),
    };

    setPosts((currentPosts) => [
      newPost,
      ...currentPosts,
    ]);
  };


  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                posts={posts}
                actions={actions}
                actionTypes={actionTypes}
                currentProfileId={currentProfileId}
                onAddPost={handleAddPost}
                onAction={handleAction}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <Profile
                posts={posts}
                actions={actions}
                actionTypes={actionTypes}
                currentProfileId={currentProfileId}
                onAction={handleAction}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;