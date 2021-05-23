import React from 'react';
// import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import {Redirect} from 'react-router-dom'
import { auth } from '../config/firebase-config';
export interface IAuthRouteProps {
  
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props;
    if(!auth.currentUser){
        return <Redirect to = "/signin"/>
    }
    return (
       <div>
           {children}
       </div>
       
    );
}

export default AuthRoute;