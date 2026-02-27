"use client";

import { navigationStore } from "@/features/stores/navigation.store";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { forwardRef, useCallback } from "react";

type TransitionLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export const TransitionLink = forwardRef<
  HTMLAnchorElement,
  TransitionLinkProps
>(function TransitionLink({ href, className, onClick, target, ...props }, ref) {
  const pathname = usePathname();
  const router = useRouter();
  const { TransitionNavigate } = navigationStore();

  const hrefValue = typeof href === "string" ? href : href.toString();
  const isExternalHref =
    hrefValue.startsWith("http://") ||
    hrefValue.startsWith("https://") ||
    hrefValue.startsWith("mailto:") ||
    hrefValue.startsWith("tel:") ||
    hrefValue.startsWith("//");
  const normalizedPathname =
    pathname.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;
  const normalizedHref =
    hrefValue.endsWith("/") && hrefValue !== "/"
      ? hrefValue.slice(0, -1)
      : hrefValue;
  const isActive = !isExternalHref && normalizedPathname === normalizedHref;

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) {
        return;
      }

      const hasModifierKey = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
      if (
        hasModifierKey ||
        e.button !== 0 ||
        target === "_blank" ||
        e.currentTarget.getAttribute("target") === "_blank" ||
        isExternalHref
      ) {
        return;
      }

      e.preventDefault();
      if (isActive) {
        return;
      }

      await TransitionNavigate(hrefValue, router, pathname);
    },
    [
      TransitionNavigate,
      hrefValue,
      isActive,
      isExternalHref,
      onClick,
      pathname,
      router,
      target,
    ],
  );

  return (
    <Link
      ref={ref}
      href={href}
      className={cn(className, isActive && "active")}
      onClick={handleClick}
      target={target}
      {...props}
    />
  );
});
