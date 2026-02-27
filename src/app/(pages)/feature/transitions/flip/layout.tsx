import { FlipTransition } from "@/features/transitionNavigate/components";

export default function FlipTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FlipTransition>{children}</FlipTransition>;
}
