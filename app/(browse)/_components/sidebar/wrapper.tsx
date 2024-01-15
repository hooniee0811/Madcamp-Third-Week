"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useEffect, useState } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { useIsClient } from "usehooks-ts";
import { FollowingSkeleton } from "./following";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  // declared in /store/use-sidebar.tsx using zustand (usage is similar with useState or something)
  // client component에서만 사용 가능

  /*const [isClient, setIsClient] = useState(false);*/
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  //hydration error: serverside HTML과 clientside HTML이 일치하지 않을 때 발생하는 에러
  //서버측에서는 collapsed의 초기 값이 false이지만 mobile 환경에서 client측의 collpased는 true -> server HTML과 client HTML이 다름 -> hydration error

  //useEffect executes only on client component (serverside rendering has no access to useEffect)
  /*useEffect(() => {
    setIsClient(true);
  }, []);*/

  //on serverside, render skeleton
  if (!isClient) {
    return (
      <aside
        className={cn(
          "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50",
          collapsed && "w-[70px]"
        )}
      >
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }

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
