const Input = (props) => {
  const { lable, vanilla } = props;
  return (
    <>
      <span>{lable}</span>
      <div
        style={{
          width: "300px",
          padding: "5px 10px",
          border: "1px solid black",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          onChange={(e) => {
            vanilla((prev) => e.target.value);
          }}
          style={{ outline: "none", border: "none", width: "100%" }}
          type="text"
        />
      </div>
    </>
  );
};

export default Input;
