export class DockitReactPlayground extends HTMLElement {
  $renderRoot: HTMLElement;
  private $style: HTMLStyleElement;
  private _styles: string | CSSStyleSheet;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    if (!this.shadowRoot.adoptedStyleSheets) {
      this.$style = document.createElement('style');
      this.shadowRoot.appendChild(this.$style);
    }
    this.$renderRoot = document.createElement('div');
    this.shadowRoot.appendChild(this.$renderRoot);
  }

  set styles(styles: string | CSSStyleSheet) {
    if (styles !== this._styles) {
      this.updateStyles(styles);
    }
    this._styles = styles;
  }

  private updateStyles(styles: string | CSSStyleSheet = '') {
    if (!this.shadowRoot.adoptedStyleSheets) {
      let stylesString =
        styles instanceof CSSStyleSheet
          ? this.convertSheetToString(styles)
          : styles;
      this.$style.textContent = stylesString;
      return;
    }

    let sheet: CSSStyleSheet;
    if (styles instanceof CSSStyleSheet) {
      sheet = styles;
    } else {
      sheet = new CSSStyleSheet();
      sheet.replaceSync(styles);
    }
    this.shadowRoot.adoptedStyleSheets = [sheet];
  }

  private convertSheetToString(cssStyleSheet: CSSStyleSheet): string {
    return Array.from(cssStyleSheet.cssRules)
      .map((r) => r.cssText)
      .join(' ');
  }
}
customElements.define('dockit-react-playground', DockitReactPlayground);
