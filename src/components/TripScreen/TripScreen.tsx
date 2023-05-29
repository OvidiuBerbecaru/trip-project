import { TripScreenContainer } from "./styles";
import { Trip } from "../../types";
import { useEffect, useState } from "react";
import TripCard from "../TripCard/TripCard";

const TripScreen = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch("/api/trips");
      const data = await response.json();
      setTrips(data.trips);
    };
    fetchTrips();
  }, []);

  return (
    <TripScreenContainer>
      {trips.map((trip) => (
        <TripCard trip={trip} key={trip.id} />
      ))}
    </TripScreenContainer>
  );
};

export default TripScreen;
