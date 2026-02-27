import { SplitTransition } from "@/features/transitionNavigate/components";

export default function SplitTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SplitTransition>{children}</SplitTransition>;
}
