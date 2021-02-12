import { WindowDimensionsProvider } from "src/contexts/WindowDimensionsContext";
import "../styles/globals.css";

const SafeHydrate: React.FC<{}> = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <WindowDimensionsProvider>
        <Component {...pageProps} />
      </WindowDimensionsProvider>
    </SafeHydrate>
  );
}

export default MyApp;
