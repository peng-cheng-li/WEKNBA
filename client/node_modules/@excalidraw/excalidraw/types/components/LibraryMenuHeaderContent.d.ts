import React from "react";
import Library from "../data/library";
import { AppState, LibraryItem } from "../types";
export declare const LibraryMenuHeader: React.FC<{
    setAppState: React.Component<any, AppState>["setState"];
    selectedItems: LibraryItem["id"][];
    library: Library;
    onRemoveFromLibrary: () => void;
    resetLibrary: () => void;
    onSelectItems: (items: LibraryItem["id"][]) => void;
    appState: AppState;
}>;
