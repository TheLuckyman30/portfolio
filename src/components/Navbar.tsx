export function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="font-montserrat fixed border-b bg-white/50 backdrop-blur-sm border-gray-300 w-full h-fit shadow-md">
      <div className="flex gw-full mx-auto sm:max-w-5xl p-3 gap-15 justify-center items-center">
        {children}
      </div>
    </nav>
  );
}
