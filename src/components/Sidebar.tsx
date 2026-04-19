export function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="flex fixed p-3 gap-15 border-b bg-white/80 backdrop-blur-sm border-gray-300 w-full h-fit shadow-md justify-center items-center">
      {children}
    </nav>
  );
}
