import Card from "../Card";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, SidebarContainer, ContentContainer } from "./styles";

const Layout = ({ children, input, click }) => {
  return (
    <div>
      <>
        <Header inputinfo={input} clickevent={click} />
        <Container>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <ContentContainer>{children}</ContentContainer>
        </Container>
      </>
    </div>
  );
};

export default Layout;
