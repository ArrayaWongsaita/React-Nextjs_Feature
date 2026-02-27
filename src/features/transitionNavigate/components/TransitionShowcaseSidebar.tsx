"use client";

import { Home, Shuffle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { TransitionLink } from "@/features/transitionNavigate/components/TransitionLink";
import {
  DEFAULT_TRANSITION_ID,
  isTransitionId,
  TRANSITIONS,
  toTransitionPath,
  type TransitionId,
} from "@/features/transitionNavigate/constants/registry";
import { useTransitionNavigate } from "@/features/transitionNavigate/hooks/useTransitionNavigate.hook";
import { Button } from "@/shared/components/ui/button";

function getCurrentTransition(pathname: string): TransitionId | null {
  const parts = pathname.split("/").filter(Boolean);
  const transition = parts[2];
  if (parts[0] !== "feature" || parts[1] !== "transitions" || !transition) {
    return null;
  }
  return isTransitionId(transition) ? transition : null;
}

export function TransitionShowcaseSidebar() {
  const pathname = usePathname();
  const { transitionNavigate } = useTransitionNavigate();
  const currentTransition = useMemo(
    () => getCurrentTransition(pathname),
    [pathname],
  );

  function navigateRandomTransition() {
    const candidates = TRANSITIONS.map((item) => item.id).filter(
      (id) => id !== currentTransition,
    );
    const randomId =
      candidates[Math.floor(Math.random() * candidates.length)] ??
      DEFAULT_TRANSITION_ID;
    transitionNavigate(toTransitionPath(randomId));
  }

  return (
    <aside className="w-full shrink-0 rounded-2xl border bg-sidebar text-sidebar-foreground p-4 md:w-72">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Transition Lab
        </p>
        <h2 className="mt-1 text-lg font-semibold">Custom Navigation</h2>
      </div>

      <div className="space-y-2">
        {TRANSITIONS.map((item) => {
          const active = currentTransition === item.id;
          return (
            <Button
              key={item.id}
              asChild
              variant={active ? "default" : "ghost"}
              className="w-full justify-start"
            >
              <TransitionLink href={toTransitionPath(item.id)}>
                {item.label}
              </TransitionLink>
            </Button>
          );
        })}
      </div>

      <div className="mt-6 space-y-2 border-t pt-4">
        <Button
          variant="secondary"
          className="w-full justify-start"
          onClick={navigateRandomTransition}
        >
          <Shuffle />
          Random (useTransitionNavigate)
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={() => transitionNavigate("/")}
        >
          <Home />
          Home (useTransitionNavigate)
        </Button>
      </div>
    </aside>
  );
}
