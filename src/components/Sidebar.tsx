export function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="flex flex-col gap-15 p-2 pr-5 border-r-3 border-blue-300 w-fit h-full">
      {children}
    </nav>
  );
}
