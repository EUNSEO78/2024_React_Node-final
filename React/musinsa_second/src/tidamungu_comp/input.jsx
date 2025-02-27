const Input = (props) => {
  const { placeholder, a } = props;
  return (
    <div
      style={{
        width: "400px",
        height: "50px",
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        style={{
          width: "100%",
          height: "100%",
          outline: "none",
          border: "1px solid black",
          borderRadius: "5px",
          fontSize: "20px",
        }}
        onChange={a}
      />
    </div>
  );
};

export default Input;
