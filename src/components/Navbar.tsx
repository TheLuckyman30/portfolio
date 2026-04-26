export function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="font-montserrat flex fixed border-b bg-white/50 backdrop-blur-sm border-gray-300 w-screen h-fit shadow-md justify-center items-center">
      <div className="flex gw-full sm:max-w-5xl p-3 gap-15 justify-center items-center">
        {children}
      </div>
    </nav>
  );
}
