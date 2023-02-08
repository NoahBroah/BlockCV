import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import EmployerProfile from "./EmployerProfile";
import UserProfile from "./UserProfile";
function Home() {
  const [user] = useContext(UserContext);

  return (
    <div>
      {!user ? (
        "Please Login or Signup"
      ) : (
        <div>
          <div>
            <UserProfile />
          </div>
          <div>
            <EmployerProfile />
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Home;
