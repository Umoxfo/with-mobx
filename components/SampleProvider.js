import { createContext, useContext } from "react";
import { Store } from "../store";
import { enableStaticRendering } from "mobx-react-lite";
import { deps, arrs } from "./SampleStore";

enableStaticRendering(typeof window === "undefined");

let store;
export const SampleStoreContext = createContext();

export function useSampleStore() {
    const context = use(SampleStoreContext);
    if (!context) {
        throw new Error("useStore must be used within StoreProvider");
    }

    return context;
}

function initializeStore() {
    const _store = store ?? { deps, arrs };

    // For SSG and SSR always create a new store
    if (typeof window === "undefined") return _store;

    // Create the store once in the client
    store ??= _store;

    return _store;
}

export function SampleStoreProvider({ children }) {
    const store = initializeStore();

    return (
        <SampleStoreContext value={store}>{children}</SampleStoreContext>
    );
}
