// Type definitions for ag-grid v18.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { GridPanel } from "../gridPanel/gridPanel";
import { IComponent } from "./iComponent";
export interface IStatusBar extends IComponent<any> {
    registerGridPanel(gridPanel: GridPanel): void;
}
