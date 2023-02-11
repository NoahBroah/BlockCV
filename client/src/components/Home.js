import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import EmployerProfile from "./EmployerProfile";
import UserProfile from "./UserProfile";
function Home({ verifications, setVerifications}) {
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
              <EmployerProfile verifications={verifications} setVerifications={setVerifications}/>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
