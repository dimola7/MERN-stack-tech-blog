import {SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarLink, SidebarRoutes, SidebarMenu} from './Sidebar.styles';
interface Props{
    isOpen: boolean;
    toggle: ()=> void
}
const Sidebar = (props: Props) => {
    return (
        <SidebarContainer isOpen = {props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="/login">
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoutes to="/login">
                        Sign In
                    </SidebarRoutes>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
