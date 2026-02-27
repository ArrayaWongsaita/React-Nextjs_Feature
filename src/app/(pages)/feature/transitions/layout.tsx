import { TransitionShowcaseSidebar } from "@/features/transitionNavigate/components/TransitionShowcaseSidebar";

export default function TransitionShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:gap-6 md:px-6 md:py-6">
        <TransitionShowcaseSidebar />
        <main className="min-h-[80vh] flex-1 rounded-2xl border bg-card p-5 shadow-sm md:p-7">
          {children}
        </main>
      </div>
    </div>
  );
}
