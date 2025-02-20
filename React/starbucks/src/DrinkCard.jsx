const DrinkCard = (props) => {
  const { drinkSrc, drinkName } = props;
  return (
    <div style={{ width: "fit-content", padding: "20px" }}>
      <img src={drinkSrc} alt="" />
      <div style={{ textAlign: "center", padding: "20px 0px" }}>
        {drinkName}
      </div>
    </div>
  );
};

export default DrinkCard;
