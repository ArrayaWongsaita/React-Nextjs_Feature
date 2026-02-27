import { WaveTransition } from "@/features/transitionNavigate/components";

export default function WaveTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WaveTransition>{children}</WaveTransition>;
}
