const ClothesImg = (props) => {
  return (
    <div style={{ width: "175px", height: "210px" }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={props.clothesSrc}
        alt=""
      />
    </div>
  );
};

export default ClothesImg;
