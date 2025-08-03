import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";
import { RenderContext } from "../interfaces/RenderContext";

export class List implements DocNode {
  constructor(private items: string[], private renderer: DocRenderer) {}

  render(): string {
    const start = performance.now();

    const content = this.renderer.renderList(this.items);

    const end = performance.now();

    const context: RenderContext = {
      type: "List",
      content,
      items: this.items,
      renderTime: end - start,
    };

    RenderEventPublisher.notify(context);

    return content;
  }
}
