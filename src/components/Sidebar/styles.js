import styles from "styled-components";

export const SidebarText = styles.h1`
    font-size: 64px;
    color: white;
    margin-bottom: -2rem

`;

export const GradientText = styles.h1`
font-size: 72px;
background: -webkit-linear-gradient(left, #784ba0, #2b86c5);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-bottom: -2rem
`;

export const Paragraph = styles.p`
margin-top: 4rem;
color: rgba(255, 253, 253, 0.2);
max-width: 450px;
`;

export const Icons = styles.img`
    height: 30px;
    width: 30px;
    margin-right: 2rem;
`;
