import { MorphTransition } from "@/features/transitionNavigate/components";

export default function MorphTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MorphTransition>{children}</MorphTransition>;
}
