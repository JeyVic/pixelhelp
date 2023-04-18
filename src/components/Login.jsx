import { signInWithGoogle } from "../services/firebase";
import "../App.css";

const Login = () => {
    return (
        <div>
            <h1>Login Component</h1>
            <button
                className="button"
                onClick={signInWithGoogle}
                style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px",
                    fontSize: "18px",
                    cursor: "pointer",
                }}
            >
                <i className="fab fa-google"></i> Sign in with Google
            </button>
        </div>
    );
};

export default Login;
