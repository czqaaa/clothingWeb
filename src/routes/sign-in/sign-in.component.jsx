import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUsers = async function () {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <div>
      <button onClick={logGoogleUsers}>Sign in with Google</button>
    </div>
  );
};
export default SignIn;
