import { NavigationBar } from "../";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavigationBar />
      <div className="container mx-auto px-4">{children}</div>
    </>
  );
};

export default Layout;
