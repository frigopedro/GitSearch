import {
  HeaderContainer,
  Input,
  H1Header,
  GradientContainer,
  Button,
  InputButtonContainer,
} from "./styles";

export default function Header({ inputinfo, clickevent }) {
  return (
    <>
      <GradientContainer />
      <HeaderContainer>
        <InputButtonContainer>
          <Input
            type="text"
            placeholder="Search"
            onChange={inputinfo}
            onKe
          ></Input>
          <Button onClick={clickevent}> Go</Button>
        </InputButtonContainer>
        <H1Header>Developed by Pedro</H1Header>
      </HeaderContainer>
    </>
  );
}
