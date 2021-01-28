import styles from "styled-components";

export const HeaderContainer = styles.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  @media (max-width:600px){
    flex-direction: column;
    justify-content: center;
    
  }
`;

export const Input = styles.input`
padding-left: 1rem;
height: 46px;
width: 100%;
border: none;
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(50px);
border-radius: 15px;
outline: none;
max-width: 600px;
font-weight: bold;
font-size: 1rem;
  color: white;

`;

export const H1Header = styles.h1`
  font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.3);

    @media (max-width:600px){
      font-size: 1rem;
    }
    

`;

export const GradientContainer = styles.div`
height: 30vw;

  width: 100vw;
  position: absolute;
  background: radial-gradient(
      circle 450px at top left,
      rgba(255, 0, 255, 0.5),
      transparent
    ),
    radial-gradient(
      circle 300px at 25% 00%,
      rgba(255, 50, 50, 0.5),
      transparent
    );
`;

export const Button = styles.button`
position: relative;
    margin-top: 5px;
    margin-bottom: 5px;
    left: -50px;
    width: 50px;
    border: none;
    background: rgba(0,0,0, 0.5);
    backdrop-filter: blur(100px);
    outline: none;
    border-radius: 10px;

    font-size: 1rem;
    font-weight: bold;
    color: rgba(255,255,255, 0.25);
    &:hover{

    background: rgba(255,255,255, 0.3);

    }
    @media (max-width:600px){
      left: -50px;
    }
    @media (min-width:1000px){
      left: -60px;
    }

    
`;

export const InputButtonContainer = styles.div`
      display: flex;
      width: 60%;
      
      @media (max-width:600px){
        width: 90%;
        padding-left: 2rem;
      }
  
`;
