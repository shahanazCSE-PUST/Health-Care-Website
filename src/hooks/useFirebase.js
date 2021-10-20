import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [useremail, setuserEmail] = useState("");
  const [userpassword, setuserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const [alert, setAlert] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = e => {
    setIsLoading(true);
    setIsLogin(e.target.checked);
    setIsLoading(false);
    console.log(isLogin);
  }
  const getName = e => {
    setName(e.target.value);
  }
  const getImage = e => {
    setImage(e.target.value);
  }

  const getEmail = e => {
    setEmail(e.target.value);
  }

  const getPassword = e => {
    setPassword(e.target.value);
  }

  const userEmail = e => {
    setuserEmail(e.target.value)
  }

  const userPassword = e => {
    setuserPassword(e.target.value)
  }



  const setUserInfo = () => {
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: image
    }).then(() => {

    }).catch((error) => {
      setError(error.message)
    });
  }

  const userRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (email.length === 0) {
      setError("Please enter your email")
      return;
    }
    if (password.length === 0) {
      setError("Please enter a password");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 charecters");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUserInfo();
        const user = result.user;
        console.log(user);
        setError("");
        // setAlert("Registration Successful!");
        logOut();
        window.location.replace("/login");
      })
      .catch((error) => {
        setError(error.message);
      })

  }

  const signInWithEmail = e => {
    setIsLoading(true);
    e.preventDefault();
    if (useremail.length === 0) {
      setError("Please give your email")
      return;
    }
    if (userpassword.length === 0) {
      setError("Please give your password")
      return;
    }


    signInWithEmailAndPassword(auth, useremail, userpassword)
      .then(result => {
        const user = result.user;
        console.log(useremail);
        setUser(result.user)
        //   window.location.reload(true);
        setAlert("You Have Successfully Logged in!");
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
    //   .then(result => {
    //     setUser(result.user);
    //     console.log(result.user);
    //   })
    setIsLoading(false);
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({})
        setError('');
        setAlert('Logged Out!')
      })
      .finally(() => setIsLoading(false));
  }

  return { user, alert, error, isLoading, toggleLogin, isLogin, userRegistration, getName, getImage, getEmail, getPassword, userEmail, userPassword, signInWithEmail, handleGoogleSignIn, logOut }

}

export default useFirebase;