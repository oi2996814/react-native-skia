import type { RefObject } from "react";

import type { DrawingInfo, SkiaView } from "../views";
import type { FontMgr, SkCanvas, SkPaint, Skia, Vector } from "../skia/types";

export interface DrawingContext extends Omit<DrawingInfo, "touches"> {
  canvas: SkCanvas;
  paint: SkPaint;
  opacity: number;
  center: Vector;
  ref: RefObject<SkiaView>;
  fontMgr: FontMgr;
  Skia: Skia;
}
