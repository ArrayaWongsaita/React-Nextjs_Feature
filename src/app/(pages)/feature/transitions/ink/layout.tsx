import { InkTransition } from "@/features/transitionNavigate/components";

export default function InkTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <InkTransition>{children}</InkTransition>;
}
