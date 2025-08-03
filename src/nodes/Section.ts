import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";
import { RenderContext } from "../interfaces/RenderContext";

export class Section implements DocNode {
  constructor(
    private title: string,
    private renderer: DocRenderer,
    private children: DocNode[] = [],
    private level: number = 1
  ) {}

  add(child: DocNode): void {
    this.children.push(child);
  }

  render(): string {
    const start = performance.now();

    const header = this.renderer.renderHeader(this.level, this.title);
    const renderedChildren = this.children.map(child => child.render()).join('\n\n');
    const content = [header, renderedChildren].filter(Boolean).join('\n\n');

    const end = performance.now();

    const context: RenderContext = {
      type: "Section",
      content,
      level: this.level,
      renderTime: end - start,
    };

    RenderEventPublisher.notify(context);

    return content;
  }
}
