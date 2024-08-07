
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        
        <div className="mt-12">{children}</div>
      </div>
    );
  }