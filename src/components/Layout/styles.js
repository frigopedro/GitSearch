import styled from "styled-components";

export const Container = styled.div`
  margin-left: 4rem;
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
  }
`;

export const SidebarContainer = styled.div`
  margin-left: 5rem;
  @media (max-width: 450px) {
    margin-left: 1rem;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 10rem;
  width: 60%;
  display: inline-block;
  @media (max-width: 1000px) {
    margin-left: -2rem;
    margin-top: 1rem;
  }
  @media (max-width: 400px) {
    margin-left: -6rem;
    margin-top: 1rem;
  }
`;
