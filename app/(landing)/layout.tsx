const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-full landing overflow-auto'>
      <div className='mx-auto max-w-screen-xl h-full w-full'>{children}</div>
    </main>
  );
};

export default LandingLayout;
