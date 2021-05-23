import SignUp from "../pages/signup/SignUp";
import Login from "../pages/signup/Login";
import Welcome from "../pages/Welcome/Welcome";
import Home from "../pages/home"
interface IRoute {
 path: string;
 exact: boolean;
 component: any;
 name: string;
 protected: boolean;
}
const routes: IRoute[] = [
 {
  path: "/welcome",
  exact: true,
  component: Welcome,
  name: "Welcome Page",
  protected: true,
 },
 {
  path: "/signup",
  exact: true,
  component: SignUp,
  name: "Register Page",
  protected: false,
 },
 {
  path: "/signin",
  exact: true,
  component: Login,
  name: "Login Page",
  protected: false,
 },
 {
  path: "/",
  exact: true,
  component: Home,
  name: "Landing Page",
  protected: false,
 },
];

export default routes;
