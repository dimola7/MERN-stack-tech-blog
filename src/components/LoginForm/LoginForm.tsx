import { Link } from "react-router-dom";
import loginStyles from "./LoginForm.module.css";
import logo from "../../images/big-black-five-petal-flower.svg";

const LoginForm = () => {
  return (
    <div>
      <div className={loginStyles.loginCard}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "50px", marginBottom: "25px" }}
        />
        <h2 className={loginStyles.header}>Login</h2>
        <form method="post">
        <div className={loginStyles.input}>
            <p className={loginStyles.keytext}>Email</p>
            <input type="email" name="" id="" required/>
        </div>
        <div className={loginStyles.input}>
            <p className={loginStyles.keytext}>Password</p>
            <input type="password" name="" id="" autoComplete="on" required/>
        </div>
        <Link to="/welcome">
          <input className={loginStyles.loginButton} type="submit" name="submit" value="Login" />
        </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
