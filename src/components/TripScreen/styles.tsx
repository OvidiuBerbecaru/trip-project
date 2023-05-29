import styled from "styled-components";

export const TripScreenContainer = styled.div`
  display: flex;
  padding: 50px 200px 0 200px;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 1440px) {
    padding: 50px 100px 0 100px;
  }

  @media screen and (max-width: 1024px) {
    padding: 50px 100px 0 100px;
    justify-content: flex-start;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
