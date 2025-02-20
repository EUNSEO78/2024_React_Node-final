const TabType = (props) => {
  const style = {
    ulStyle: { display: "flex", listStyle: "none" },
    liStyle: {
      padding: "20px 100px",
      fontSize: "18px",
      boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  };
  return (
    <ul style={style.ulStyle}>
      <li style={style.liStyle}>Rental Car</li>
      <li style={style.liStyle}>Hotel</li>
      <li style={style.liStyle}>Tour/Wifi</li>
    </ul>
  );
};

export default TabType;
