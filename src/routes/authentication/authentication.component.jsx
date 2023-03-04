import SignUpForm from "../../components/sign-up/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
// import { useEffect } from "react";

// import { getRedirectResult } from "firebase/auth";
// import { async } from "@firebase/util";

const Authentication = () => {
  //重定向 登陆
  //   useEffect(() => {//render once
  //     async function fetchData() {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
