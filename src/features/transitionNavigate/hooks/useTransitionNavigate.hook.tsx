import { navigationStore } from "@/features/stores/navigation.store";
import { usePathname, useRouter } from "next/navigation";

export function useTransitionNavigate() {
  const navigate = navigationStore((state) => state.TransitionNavigate);
  const router = useRouter();
  const pathname = usePathname();

  function transitionNavigate(href: string) {
    navigate(href, router, pathname);
  }

  return { transitionNavigate };
}
