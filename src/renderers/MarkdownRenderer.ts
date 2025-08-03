import { BaseRenderer } from "./BaseRenderer";

export class MarkdownRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    const safeText = this.escape(text);
    const prefix = "#".repeat(level);
    return `${prefix} ${safeText}`;
  }

  renderParagraph(text: string): string {
    const safeText = this.escape(text);
    return safeText;
  }

  renderList(items: string[]): string {
    const listItems = items.map(item => `- ${this.escape(item)}`).join('\n');
    return listItems;
  }
}
