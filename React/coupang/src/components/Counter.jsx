const Counter = (props) => {
  const { cnt, minus, plus } = props;
  const style = {
    btnSt: {
      width: "150px",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "20px",
      border: "1px solid black",
      borderRadius: "5px",
      backgroundColor: "white",
    },
  };
  return (
    <button style={style.btnSt}>
      <span onClick={minus}>-</span>
      <span>{cnt}</span>
      <span onClick={plus}>+</span>
    </button>
  );
};

export default Counter;
