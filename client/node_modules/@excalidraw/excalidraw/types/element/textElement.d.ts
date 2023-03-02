import { ExcalidrawElement, ExcalidrawTextElement, ExcalidrawTextElementWithContainer, FontString, NonDeletedExcalidrawElement } from "./types";
import { MaybeTransformHandleType } from "./transformHandles";
export declare const redrawTextBoundingBox: (textElement: ExcalidrawTextElement, container: ExcalidrawElement | null) => void;
export declare const bindTextToShapeAfterDuplication: (sceneElements: ExcalidrawElement[], oldElements: ExcalidrawElement[], oldIdToDuplicatedId: Map<ExcalidrawElement["id"], ExcalidrawElement["id"]>) => void;
export declare const handleBindTextResize: (element: NonDeletedExcalidrawElement, transformHandleType: MaybeTransformHandleType) => void;
export declare const measureText: (text: string, font: FontString, maxWidth?: number | null) => {
    width: number;
    height: number;
    baseline: number;
};
export declare const getApproxLineHeight: (font: FontString) => number;
export declare const wrapText: (text: string, font: FontString, maxWidth: number) => string;
export declare const charWidth: {
    calculate: (char: string, font: FontString) => number;
    getCache: (font: FontString) => number[];
};
export declare const getApproxMinLineWidth: (font: FontString) => number;
export declare const getApproxMinLineHeight: (font: FontString) => number;
export declare const getMinCharWidth: (font: FontString) => number;
export declare const getMaxCharWidth: (font: FontString) => number;
export declare const getApproxCharsToFitInWidth: (font: FontString, width: number) => number;
export declare const getBoundTextElementId: (container: ExcalidrawElement | null) => string | null;
export declare const getBoundTextElement: (element: ExcalidrawElement | null) => ExcalidrawTextElementWithContainer | null;
export declare const getContainerElement: (element: (ExcalidrawElement & {
    containerId: ExcalidrawElement["id"] | null;
}) | null) => ExcalidrawElement | null;
export declare const getContainerDims: (element: ExcalidrawElement) => {
    width: number;
    height: number;
};
