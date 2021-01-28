import { SidebarText, GradientText, Paragraph, Icons } from "./styles";
import Link from "next/link";
export default function Sidebar() {
  return (
    <>
      <div>
        <SidebarText>Procure seus</SidebarText>
        <GradientText>Amigos</GradientText>

        <SidebarText>aqui</SidebarText>
        <Paragraph>
          App made with ReactJs, NextJs and Styled Components as a portfolio
          application and as radial gradient styles complexity study.
        </Paragraph>
        <Link href="https://github.com/pedriin1">
          <Icons src="https://image.flaticon.com/icons/png/512/25/25231.png" />
        </Link>
        <Link href="https://www.linkedin.com/in/pedro-maia-frigo-08ab401a3/">
          <Icons src="https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-squircle.png" />
        </Link>
      </div>
    </>
  );
}
