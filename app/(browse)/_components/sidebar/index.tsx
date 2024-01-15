import { getRecommended } from "@/lib/recommended-service";
import { Recommeded } from "./recommended";
import { Toggle } from "./toggle";
import { Wrapper } from "./wrapper";

export const Sidebar = async () => {
  const recommended = await getRecommended();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommeded data={recommended} />
      </div>
    </Wrapper>
  );
};
