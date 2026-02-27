import { PixelTransition } from "@/features/transitionNavigate/components";

export default function PixelTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PixelTransition>{children}</PixelTransition>;
}
