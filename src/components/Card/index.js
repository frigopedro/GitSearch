import {
  CardContainer,
  ProfilePicture,
  Textname,
  ProfileContainer,
} from "./styles";
import { prominent } from "color.js";
import { useState, useEffect } from "react";

export default function Card({ imageSrc, title }) {
  const [gradient, setGradient] = useState(null);

  useEffect(async () => {
    const colors = await prominent(imageSrc, { amount: 4 }, { group: 2000 });
    setGradient({
      height: "150px",
      width: "100%",
      background: `radial-gradient(
          circle at 0% 0%,
          rgba(${colors[0]}, 1), 
          transparent
        ),
        radial-gradient(
          circle closest-side at 0% 100%,
          rgba(${colors[1]}, 1), 
          transparent 400px
        ),
        radial-gradient(
            circle  at 100% 100%,
            rgba(${colors[2]}, 1), 
            transparent 400px
          ),
          radial-gradient(
            circle closest-side at 100% 0%,
            rgba(${colors[3]}, 1), 
            transparent 400px
          )
        `,
      borderTopLeftRadius: "25px",
      borderTopRightRadius: "25px",
    });
    console.log(gradient);
  }, [imageSrc]);
  return (
    <div style={{ display: "inline-block", margin: "1rem" }}>
      <CardContainer>
        <div style={gradient} />

        <ProfileContainer>
          <ProfilePicture src={imageSrc} alt="Profile picture" />
          <Textname> {title} </Textname>
        </ProfileContainer>
      </CardContainer>
    </div>
  );
}
