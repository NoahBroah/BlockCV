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
          {user.is_employer === false ? (
            <div>
              <UserProfile />
            </div>
          ) : (
            <div>
              <EmployerProfile />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
