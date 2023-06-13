import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        display: "inline-flex",
        width: "100%",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      <Link to="/">
        <h3>헤더입니다.</h3>
      </Link>
      <div
        style={{
          lineHeight: "3rem",
          width: "70%",
          display: "flex",
          justifyContent: "end",
          gap: "5%",
        }}
      >
        <Link to="/about" title="소개">
          소개
        </Link>
        <Link to="/about/3" title="서비스3">
          소개3
        </Link>
      </div>
    </div>
  );
}

export default Header;
