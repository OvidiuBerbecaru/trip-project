import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  border: 10px solid white;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 450px;
  height: 300px;

  @media screen and (max-width: 1440px) {
    width: 375px;
    height: 250px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  position: absolute;
  z-index: 1;
  border-radius: 10px;
`;

export const CardDetailsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    margin-top: 50px;
  }
`;

export const TripName = styled.span`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 5px 0;
`;

export const TripDetails = styled.span`
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0 0 20px 0;
`;

export const Emissions = styled.div`
  border-radius: 15px;
  background-color: #1c2939;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  width: 70%;

  p {
    font-size: 0.7rem;
    font-weight: 600;
  }
`;

export const TripRating = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 70%;
  background-color: white;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.9rem;
    font-weight: 700;
    padding-left: 5px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
