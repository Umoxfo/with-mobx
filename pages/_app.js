import { StoreProvider } from "../components/StoreProvider";
import { SampleStoreProvider } from "../components/SampleProvider";

export default function App({ Component, pageProps }) {
  return (
    <SampleStoreProvider>
      <StoreProvider {...pageProps}>
        <Component {...pageProps} />
      </StoreProvider>
    </SampleStoreProvider>
  );
}
