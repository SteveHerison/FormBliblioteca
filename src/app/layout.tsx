import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="w-screen h-screen flex flex-col bg-zinc-800 text-orange-400 font-custom ">
      {children}
    </main>
  );
};

export default Layout;
