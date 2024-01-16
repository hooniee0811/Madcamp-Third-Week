import Link from "next/link";
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
    <Link href="/">
      <div className="flex lg:flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/spooky.svg" alt="Madwitch" height={32} width={32} />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">Twitch Korea</p>
          <p className="text-xs text-muted-foreground">Creator dashboard</p>
        </div>
      </div>
    </Link>
  );
};
