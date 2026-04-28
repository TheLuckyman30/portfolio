export function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <nav
      id="sidenav"
      className="hidden xl:flex flex-col fixed gap-5 top-13 p-3 2xl:p-5 border-r border-gray-300"
    >
      {children}
    </nav>
  );
}
