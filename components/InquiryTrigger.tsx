"use client";

import { useInquiry } from "./InquiryDrawer";

export function InquiryTrigger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useInquiry();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
