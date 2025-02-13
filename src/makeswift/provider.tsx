"use client";

import { runtime } from "@/makeswift/runtime";
import {
  ReactRuntimeProvider,
  RootStyleRegistry,
} from "@makeswift/runtime/next";
import "@/makeswift/components";

export function MakeswiftProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactRuntimeProvider runtime={runtime}>
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </ReactRuntimeProvider>
  );
}
