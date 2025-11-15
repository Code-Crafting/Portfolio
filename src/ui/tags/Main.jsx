const Main = ({ children }) => {
  return (
    <main className="flex-1 max-w-7xl mx-auto pt-16 px-8 pb-4 overflow-y-auto h-screen no-scrollbar">
      {children}
    </main>
  );
};

export default Main;
