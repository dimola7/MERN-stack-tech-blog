import styled from 'styled-components';

export const Nav = styled.nav`
    background: #000;
    color: #fff;
    height: 80px;
    margin-bottom: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    .hello{
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        margin-left: 26rem;
        width: 100%;
    }
    .logo{
        color: #fff;
        justify-self: flex-start;
        cursor: pointer;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        margin-left: 20px;
        font-weight: bold;
        text-decoration: none;
    }
    .navbar-container{
        display: flex;
        justify-content: space-between;
        height: 80px;
        z-index: 1;
        width: 100%;
        max-width: 85%;
    }
    .nav-burger{
        display: none;
    }
    .nav-button{
        display: flex;
        align-items: center;
    }
    .nav-links{
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;
    }
    .nav-button-link{
        border-radius: 50px;
        background: #6C63FF;
        white-space: nowrap;
        padding: 10px 22px;
        color: #fff;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
    }
    .nav-button-link:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    
    @media screen and (max-width: 768px){
        .hello{
            padding: 0 !important;
            margin-left: 0 !important;
            display: none;
          }  
          .nav-burger{
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(-100%, 60%);
                font-size: 1.8rem;
                cursor: pointer;
                color: #fff;
          }
          .nav-button{
            display: none;
        }
    }
  
    @media screen and (max-width: 960px){
        transition: 0.8s ease;  
    }
    
`