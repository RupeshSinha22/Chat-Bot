import { Link } from "react-router-dom";
// import Typography from "@mui/material/Typography";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="openai.png"
          alt="openai"
          width={"30px"}
          height={"30px"}
          className="image-inverted"
        />
      </Link>{" "}
      <div
        style={{
            display: { md: "block", sm: "none", xs: "none" },
            marginRight: "auto",
            fontWeight: "800",
            textShadow: "2px 2px 20px #000",
        }}
        >
        <span style={{ fontSize: "20px" }}>ChatBot</span>
        </div>

    </div>
  );
};

export default Logo;