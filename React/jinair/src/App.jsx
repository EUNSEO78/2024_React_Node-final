import HotelWebCard from "./HotelWebCard";

function App() {
  const objArr = [
    {
      src: "https://images.jinair.com/newHom/images/web/contents/logo-bookingdot.png",
      hotelWebCom: "Booking.com",
      hotelWebComInfo:
        "Browse through popular hotels around the world with no booking fees.",
    },
    {
      src: "https://images.jinair.com/newHom/images/web/contents/logo-bookingdot.png",
      hotelWebCom: "Booking.com",
      hotelWebComInfo:
        "Browse through popular hotels around the world with no booking fees.",
    },
  ];
  return objArr.map((v) => <HotelWebCard {...v} />);
}

export default App;
