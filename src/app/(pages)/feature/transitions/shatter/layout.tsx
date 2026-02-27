import { ShatterTransition } from "@/features/transitionNavigate/components";

export default function ShatterTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ShatterTransition>{children}</ShatterTransition>;
}
