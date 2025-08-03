import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";
import { RenderContext } from "../interfaces/RenderContext";

export class Paragraph implements DocNode {
  constructor(private text: string, private renderer: DocRenderer) {}

  render(): string {
    const start = performance.now();

    const content = this.renderer.renderParagraph(this.text);

    const end = performance.now(); 

    const context: RenderContext = {
      type: "Paragraph",
      content,
      renderTime: end - start,
    };

    RenderEventPublisher.notify(context);

    return content;
  }
}
