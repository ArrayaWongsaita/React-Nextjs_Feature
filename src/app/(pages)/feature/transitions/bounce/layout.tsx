import { BounceTransition } from "@/features/transitionNavigate/components";

export default function BounceTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BounceTransition>{children}</BounceTransition>;
}
