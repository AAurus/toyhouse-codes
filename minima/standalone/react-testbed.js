import React from "react";
import ReactDOM from "react-dom/client";

import {InfoRow} from "./InfoRow.js";
import {BaseContainers} from ".Containers.js";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<BaseContainers />);

const infoRowContainer = document.getElementById("info-row-container");
const infoRowRoot = ReactDOM.createRoot(container);
infoRowRoot.render(<InfoRow content="test"/>);