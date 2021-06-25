import authenticationStyles from "./Authentication.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const Authentication = () => {
    return (
        <div className={authenticationStyles.authBody}>
            
            <LoginForm />
        </div>
    )
}

export default Authentication
