import StarRatings from "react-star-ratings";

import { Trip } from "../../types";

import {
  CardContainer,
  TripName,
  TripDetails,
  Emissions,
  TripRating,
  CardImage,
  CardDetailsContainer,
  CardInfo,
} from "./styles";

const TripCard = ({ trip }: { trip: Trip }) => {
  console.log(trip);

  return (
    <CardContainer>
      <CardImage src={trip.imgUrl} />
      <CardDetailsContainer>
        <CardInfo>
          <TripName>{trip.name}</TripName>
          <TripDetails>
            {trip.countryNr} Countries, {trip.days} days
          </TripDetails>
          <Emissions>
            <p>Emissions offset:</p>
            <p>{trip.emissions} CO2e</p>
          </Emissions>
        </CardInfo>
        <TripRating>
          <p>Trip rating</p>
          <div>
            <StarRatings
              rating={trip.rating}
              starRatedColor="#e5ca53"
              numberOfStars={5}
              name="rating"
              starDimension="0.8rem"
            />
            <p>{trip.rating}</p>
          </div>
        </TripRating>
      </CardDetailsContainer>
    </CardContainer>
  );
};

export default TripCard;
