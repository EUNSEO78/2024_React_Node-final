const BaseButton = (props) => {
  const { buttonTop, buttonBottom } = props;
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 25px",
    fontWeight: "800",
    backgroundColor: "#e4e6e8",
    border: "none",
    borderRadius: "6px",
  };
  return (
    <button style={style}>
      <span>{buttonTop}</span>
      <span>{buttonBottom} 오픈예정</span>
    </button>
  );
};
export default BaseButton;
