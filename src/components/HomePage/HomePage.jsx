import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <h1>Добро пожаловать на главную страницу</h1>
      <Link
        to="/admin"
        style={{
          padding: "10px 20px",
          background: "#007BFF",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Перейти в админ панель
      </Link>
    </div>
  );
}
