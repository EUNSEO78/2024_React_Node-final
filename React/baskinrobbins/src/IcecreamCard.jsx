const IcecreamCard = (props) => {
  return (
    <article
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <figure
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid brown",
          borderRadius: "20px",
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={props.src}
          alt=""
        />
      </figure>
      <span>{props.name}</span>
    </article>
  );
};

export default IcecreamCard;
