import { GlitchTransition } from "@/features/transitionNavigate/components";

export default function GlitchTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GlitchTransition>{children}</GlitchTransition>;
}
