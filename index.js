import React from "react";
import { createRoot } from "react-dom/client";
import UXPinBox from "./UXPinBox.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
    <UXPinBox />
    <SpeedInsights />
  </div>,
  document.getElementById("root")
);
