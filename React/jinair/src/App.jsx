import HotelImg from "./HotelImg";
import HotelWeb from "./HotelWeb";

function App() {
  return (
    <article
      style={{
        width: "540px",
        height: "214px",
        padding: "32px 28px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        border: "1px solid black",
        borderRadius: "20px",
      }}
    >
      <HotelImg
        src={
          "https://images.jinair.com/newHom/images/web/contents/logo-bookingdot.png"
        }
      />
      <HotelWeb
        hotelWebCom={"Booking.com"}
        hotelWebComInfo={
          "Browse through popular hotels around the world with no booking fees."
        }
      />
    </article>
  );
}

export default App;
