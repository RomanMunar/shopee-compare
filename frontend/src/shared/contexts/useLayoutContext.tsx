import React, { createContext, ReactNode, useState } from "react";
import { Layout } from "../../interfaces";

const initialState: {
  layout: Layout;
  setLayout: React.Dispatch<React.SetStateAction<Layout>>;
} = {
  layout: "double",
  setLayout: () => "",
};

export const LayoutContext = createContext(initialState);
export default function SelectedItemsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [layout, setLayout] = useState<Layout>("double");

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}
