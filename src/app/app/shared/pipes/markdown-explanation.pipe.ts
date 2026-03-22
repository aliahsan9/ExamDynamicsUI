import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { parse } from 'marked';

/**
 * Renders question explanations: Markdown (## headings, lists) or pasted HTML.
 */
@Pipe({
  name: 'markdownExplanation',
  standalone: true
})
export class MarkdownExplanationPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | null | undefined): SafeHtml {
    if (value == null || value === '') {
      return this.sanitizer.bypassSecurityTrustHtml('');
    }
    const trimmed = value.trim();
    if (/<[a-z][\s\S]*>/i.test(trimmed)) {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }
    const html = parse(value, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
