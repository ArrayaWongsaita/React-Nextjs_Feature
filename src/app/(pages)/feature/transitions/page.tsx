import { TransitionLink } from "@/features/transitionNavigate/components/TransitionLink";
import {
  TRANSITIONS,
  toTransitionPath,
} from "@/features/transitionNavigate/constants/registry";
import { Button } from "@/shared/components/ui/button";

export default function TransitionsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Custom Transition Showcase
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground">
          เลือก transition จาก sidebar หรือจากรายการด้านล่าง ระบบจะใช้
          provider ใน layout ครอบหน้าไว้ และแสดง animation ตอน navigation
          อัตโนมัติ
        </p>
      </header>

      <section className="rounded-xl border bg-muted/40 p-4">
        <p className="mb-3 text-sm font-medium">ตัวอย่างการใช้งาน hook</p>
        <pre className="overflow-auto rounded-md bg-background p-3 text-xs leading-relaxed text-muted-foreground">
          {`const { transitionNavigate } = useTransitionNavigate();
transitionNavigate("/feature/transitions/glitch");`}
        </pre>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {TRANSITIONS.map((item) => (
          <article key={item.id} className="rounded-xl border bg-card p-4">
            <h2 className="font-semibold">{item.label}</h2>
            <p className="mt-1 min-h-12 text-sm text-muted-foreground">
              {item.description}
            </p>
            <Button asChild className="mt-3 w-full">
              <TransitionLink href={toTransitionPath(item.id)}>
                Open {item.label}
              </TransitionLink>
            </Button>
          </article>
        ))}
      </section>
    </div>
  );
}
