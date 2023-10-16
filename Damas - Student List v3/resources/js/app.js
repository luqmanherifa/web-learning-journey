import React from "react";
import Pages from "./Pages";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Pages />);
