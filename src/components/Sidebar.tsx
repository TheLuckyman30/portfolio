export function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <div className="hidden xl:flex flex-col fixed gap-5 top-13 p-5 border-r border-gray-300">
      {children}
    </div>
  );
}
