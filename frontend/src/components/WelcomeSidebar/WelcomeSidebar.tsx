import {
  WelcomeSidebarContainer,
  Icon,
  CloseIcon,
  WelcomeSidebarWrapper,
  WelcomeSidebarLink,
  WelcomeSidebarMenu,
} from "./WelcomeSidebar.styles";
interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const WelcomeSidebar = (props: Props) => {
  return (
      <>
    <WelcomeSidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <WelcomeSidebarWrapper>
        <WelcomeSidebarMenu>
          <WelcomeSidebarLink to="about">About</WelcomeSidebarLink>
          <WelcomeSidebarLink to="bookmarks">Bookmarks</WelcomeSidebarLink>
          <WelcomeSidebarLink to="">Dimola</WelcomeSidebarLink>
        </WelcomeSidebarMenu>
      </WelcomeSidebarWrapper>
    </WelcomeSidebarContainer>
      </>
  );
};

export default WelcomeSidebar;
