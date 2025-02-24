const Column = (props) => {
  const { children, gap } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap }}>
      {children}
    </div>
  );
};

export default Column;
