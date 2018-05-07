// =======
// IMPORTS
// =======
import {
    JupyterLab,
    JupyterLabPlugin
} from "@jupyterlab/application";

import {
  Widget
} from "@phosphor/widgets";

import {
    ClassA
} from "sf-extension-a";

// =========
// EXTENSION
// =========
function activate(app: JupyterLab): void {
    let dom_node: HTMLElement = document.createElement("p");
    dom_node.appendChild(document.createTextNode("Hello World!"));
    let instance: ClassB = new ClassB({node: dom_node})
    console.log("[SF EXTENSION B]: created the following instance:", instance);
}

export class ClassB extends ClassA {
    constructor(options: Widget.IOptions = {}) {
        super(options);
    }
}

// ========
// FINALIZE
// ========
const extension: JupyterLabPlugin<void> = {
    id: "sf-jupyterlab/extension-b",
    requires: [],
    autoStart: true,
    activate: activate
};
export default extension;
