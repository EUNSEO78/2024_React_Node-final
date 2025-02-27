const Button = (props) => {
  const { isAllValid } = props;
  return (
    <div
      style={{
        width: "500px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px 0",
        margin: "50px 0",
        fontSize: "20px",
        fontWeight: "800",
        textAlign: "center",
        backgroundColor: isAllValid ? "black" : "whitesmoke",
        color: isAllValid ? "white" : "black",
      }}
    >
      가입
    </div>
  );
};

export default Button;
