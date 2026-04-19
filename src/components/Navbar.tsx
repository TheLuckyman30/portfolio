export function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="font-montserrat flex fixed p-3 gap-15 border-b bg-white/30 backdrop-blur-sm border-gray-300 w-full h-fit shadow-md justify-center items-center">
      {children}
    </nav>
  );
}
