import React, { useRef, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const GoogleAuth = () => {
  const [signIn, setSignIn] = useState(null);
  const auth = useRef("");

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "556916695944-lahp118d0bpbgrcscu84tolh3g77luqm.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streemz",
        })
        .then(() => {
          //init  returns a promsie after initialization
          auth.current = window.gapi.auth2.getAuthInstance(); // ref to auth instance to signin/out
          setSignIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const renderAuthButton = () => {
    if (signIn === null) {
      return null;
    } else if (signIn) {
      return (
        <Button onClick={()=>onSignOut(auth.current)} variant="warning">
          <i className="bi bi-google"></i>
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button onClick={()=>onSignIn(auth.current)} variant="warning">
          <i className="bi bi-google"></i>
          Sign In
          
        </Button>
      );
    }
  };

  const onAuthChange = () => {
    setSignIn(auth.current.isSignedIn.get());
  };

  const onSignIn = (auth) =>{
    setSignIn(auth.signIn())
  }
  const onSignOut = (auth) =>{
    setSignIn(auth.signOut())
  }

  return <div className="google-auth">{renderAuthButton()}</div>;
};

export default GoogleAuth;
