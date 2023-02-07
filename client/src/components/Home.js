import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import Profile from "./Profile";
function Home() {
  const [user] = useContext(UserContext);

  return (
    <div>
      {!user ? (
        "Please Login or Signup"
      ) : (
        <div>
          <Profile />
        </div>
      )}
    </div>
  );
}

export default Home;
