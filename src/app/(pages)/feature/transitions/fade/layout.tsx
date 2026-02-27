import { FadeTransition } from "@/features/transitionNavigate/components";

export default function FadeTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FadeTransition>{children}</FadeTransition>;
}
