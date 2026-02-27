import { TransitionLink } from "@/features/transitionNavigate/components/TransitionLink";
import { Button } from "@/shared/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border bg-card p-6 text-center shadow-sm">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Transition Navigate
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Demo Playground
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          เปิดหน้า showcase เพื่อดู custom transitions ทั้งหมด
          และทดลอง navigation แบบใช้ `useTransitionNavigate`
        </p>
        <Button asChild className="mt-5">
          <TransitionLink href="/feature/transitions">
            Open Transitions
          </TransitionLink>
        </Button>
      </div>
    </div>
  );
}
