import { VortexTransition } from "@/features/transitionNavigate/components";

export default function VortexTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <VortexTransition>{children}</VortexTransition>;
}
