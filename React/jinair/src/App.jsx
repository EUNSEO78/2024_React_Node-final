import PartnershipHotel from "./PartnershipHotel";
import PartnershipLentalCar from "./PartnershipLentalCar";
import PartnershipTourWifi from "./PartnershipTourWifi";
import TabType from "./TabType";

function App() {
  return (
    <div>
      <TabType />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PartnershipLentalCar />
        <PartnershipHotel />
        <PartnershipTourWifi />
      </div>
    </div>
  );
}

export default App;
