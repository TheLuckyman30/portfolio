export function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="flex flex-col gap-15 p-5 pr-5 border-r bg-gray-50 border-gray-300 w-fit h-full">
      {children}
    </nav>
  );
}
