const Button = (props) => {
  const { isNecessaryAllChecked } = props;
  return (
    <button
      style={{
        width: "400px",
        height: "50px",
        margin: "30px 0",
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor: isNecessaryAllChecked ? "black" : "white",
        color: isNecessaryAllChecked ? "white" : "black",
      }}
      onClick={() =>
        isNecessaryAllChecked ? alert("통과") : alert("필수 동의 확인")
      }
    >
      동의하고 본인인증하기
    </button>
  );
};

export default Button;
