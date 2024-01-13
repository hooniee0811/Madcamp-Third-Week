import Image from "next/image";
import { Poppins } from "next/font/google";

//cn: allow dynamic style
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

//if it's a component that is not page.tsx or layout.tsx, no need export "default"
export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        {/* image file은 /public에 저장되어 있다고 간주 */}
        <Image src="/spooky.svg" alt="Madwitch" height="80" width="80" />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        {/* cn: allow dynamic style */}
        <p className="text-xl font-semibold">Madwitch</p>
        <p className="text-sm text-muted-foreground">Let's play</p>
      </div>
    </div>
  );
};
