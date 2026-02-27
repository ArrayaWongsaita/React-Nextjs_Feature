import { SlideTransition } from "@/features/transitionNavigate/components";

export default function SlideTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SlideTransition>{children}</SlideTransition>;
}
