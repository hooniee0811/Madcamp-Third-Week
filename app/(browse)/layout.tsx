import { Suspense } from "react";
import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        {/*Suspense: 비동기적으로 데이터를 불러올 때 또는 어떤 리소스가 준비될 때까지 fallback의 component를 띄움 */}
        {/* getRecommend 함수로부터 데이터를 받아오는 동안 띄움 */}
        <Suspense fallback={<SidebarSkeleton />} />
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
