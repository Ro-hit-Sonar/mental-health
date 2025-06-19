interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className = "",
}) => {
  return (
    <main className={`min-h-screen pt-20 md:pt-24 ${className}`}>
      {children}
    </main>
  );
};

export default PageLayout;
