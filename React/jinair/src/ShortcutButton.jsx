import { MdArrowOutward } from "react-icons/md";

const ShortcutButton = () => {
  return (
    <button
      style={{
        padding: "10px",
        borderRadius: "10px",
        border: "2px solid #BDD600",
        backgroundColor: "white",
        color: "#D3E92E",
        fontWeight: "800",

        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>Shortcut</span>
      <MdArrowOutward style={{ padding: "0px 10px" }} />
    </button>
  );
};

export default ShortcutButton;
