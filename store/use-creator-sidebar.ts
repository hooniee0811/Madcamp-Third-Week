//zustand: library to manage global parameters for React
import { create } from "zustand";

interface CreatorSidebarStore {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useCreatorSidebar = create<CreatorSidebarStore>((set) => ({
  collapsed: false,
  onExpand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
}));
