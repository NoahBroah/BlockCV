import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import EmployerProfile from "./EmployerProfile";
import UserProfile from "./UserProfile";
function Home({ verifications, setVerifications }) {
  const [user] = useContext(UserContext);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'linear-gradient(#c3dfea,#1f6e7e',
      padding: '20px',
      height: '100vh',
      width: '100vw'
    }}>
      <div style={{
        width: '80%',
        textAlign: 'center',
        marginTop: '20px'
      }}>
        {!user ? (
          <h3 style={{ color: '#333' }}>Please Login or Signup</h3>
        ) : (
          <div>
            {user.is_employer === false ? (
              <div>
                <UserProfile />
              </div>
            ) : (
              <div>
                <EmployerProfile
                  verifications={verifications}
                  setVerifications={setVerifications}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div style={{
        width: '80%',
        textAlign: 'center',
        marginTop: '20px'
      }}>
      </div>
    </div>
  );
}

export default Home;
