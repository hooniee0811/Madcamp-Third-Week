"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  //declared in /store/use-sidebar.tsx using zustand (usage is similar with useState or something)
  // client component에서만 사용 가능
  const { collapsed } = useSidebar((state) => state);

  // aside: sidebar, side ads, callout box 등 부가 정보 제공 시 사용
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {/* use client로 선언된 component의 {children: React.ReactNode}에 들어가는 component는 server component by default*/}
      {children}
    </aside>
  );
};
