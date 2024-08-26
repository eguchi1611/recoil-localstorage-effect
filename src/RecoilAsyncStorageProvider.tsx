import { useEffect } from "react";

export function RecoilAsyncStorageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("hello world");
  }, []);
  return <>{children}</>;
}
