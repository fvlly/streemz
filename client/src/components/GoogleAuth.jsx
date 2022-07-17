import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

const GoogleAuth = (props) => {
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
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      props.signIn(auth.current.currentUser.get().getId());
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

  const renderAuthButton = () => {
    if (props.isSignedIn === null) return;
    if (props.isSignedIn)
      return (
        <Button
          onClick={() => {
            onSignOut();
          }}
          variant="danger"
        >
          Sign Out
        </Button>
      );
    return (
      <Button
        onClick={() => {
          onSignIn();
        }}
        variant="danger"
      >
        Sign In
      </Button>
    );
  };

  return <div className="google-auth">{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
