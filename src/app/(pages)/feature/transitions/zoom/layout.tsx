import { ZoomTransition } from "@/features/transitionNavigate/components";

export default function ZoomTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ZoomTransition>{children}</ZoomTransition>;
}
