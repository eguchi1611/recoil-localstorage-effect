"use client";

import { useEffect } from "react";

export function RecoilAsyncStorageProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  useEffect(() => {
    window.mounted = true;
  }, []);
  return <>{children}</>;
}
