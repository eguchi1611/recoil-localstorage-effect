"use client";

import { useEffect } from "react";

export function LocalStorageEffectProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  useEffect(() => {
    window.mounted = true;
  }, []);
  return <>{children}</>;
}
