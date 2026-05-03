import "@componentCss/navbar.css";

export function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-items">{children}</div>
    </nav>
  );
}
