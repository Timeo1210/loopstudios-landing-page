import useWindowDimensions from "@/hooks/useWindowDimensions";
import React from "react";

interface WindowDimensionsState {
  width: number;
  height: number;
  device: Devices;
}

export const WindowDimensionsContext = React.createContext({
  width: 0,
  height: 0,
  device: "mobile",
} as WindowDimensionsState);

export const WindowDimensionsProvider: React.FC<{}> = ({ children }) => {
  const { width, height } = useWindowDimensions();

  const contextValue = {
    width,
    height,
    device: width < 750 ? "mobile" : "desktop",
  } as WindowDimensionsState;

  return (
    <WindowDimensionsContext.Provider value={contextValue}>
      {children}
    </WindowDimensionsContext.Provider>
  );
};
