import React, { useRef, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
const GoogleAuth = (props) => {
  //   const [signIn, setSignIn] = useState(null);
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
          //   setSignIn(auth.current.isSignedIn.get());
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const renderAuthButton = () => {
    if (props.isSignedIn === null) {
      return null;
    } else if (props.isSignedIn) {
      return (
        <Button onClick={() => onSignOut()} variant="warning">
          <i className="bi bi-google"></i>
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button onClick={() => onSignIn()} variant="warning">
          <i className="bi bi-google"></i>
          Sign In
        </Button>
      );
    }
  };

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      props.signIn();
    } else {
      props.signOut();
    }
  };

  const onSignIn = () => {
    auth.current.signIn();
  };
  const onSignOut = () => {
    auth.current.signOut();
  };

  return <div className="google-auth">{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
