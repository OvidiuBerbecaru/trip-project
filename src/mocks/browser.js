import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("/api/trips", (req, res, ctx) => {
    return res(
      ctx.json({
        trips: [
          {
            id: 1,
            name: "European Quest",
            countryNr: 8,
            days: 21,
            emissions: 340,
            rating: 4,
            imgUrl: "https://picsum.photos/450/300",
          },
          {
            id: 2,
            name: "Autumn Roadtrip",
            countryNr: 1,
            days: 14,
            emissions: 819,
            rating: 5,
            imgUrl: "https://picsum.photos/450/300",
          },
          {
            id: 3,
            name: "Diving adventure in Egypt",
            countryNr: 1,
            days: 5,
            emissions: 420,
            rating: 4.5,
            imgUrl: "https://picsum.photos/450/300",
          },
        ],
      })
    );
  })
);

worker.start();
