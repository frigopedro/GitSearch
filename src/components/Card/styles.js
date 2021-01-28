import styles from "styled-components";

export const CardContainer = styles.div`
    width: 250px;
    height: 250px;
    background-color: #232333;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    box-shadow: 10px 10px 22px 0px rgba(0, 0, 0, 0.1);
    align-items: center;
`;

export const ProfilePicture = styles.img`
height: 70px;
width: 70px;
border-radius: 50px;

`;

export const Textname = styles.h1`

color: rgba(255, 255, 255, 0.8);
margin-bottom: -0.250rem;
font-size: 1.5rem;
max-width: 240px;
`;

export const ProfileContainer = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -30px
    
    
`;
