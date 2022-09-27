import { LitElement, html, css } from 'lit-element';
import '../footer-component/footer-component.js';

class PassFooter  extends LitElement {

  static get is() {
    return 'pass-footer';
  }

  static get properties() {
    return {
        items : {type: Array}
    };
  }

  constructor() {
    super();
    this.items = [
        {item : "Facebook",
        link : "https://www.facebook.com/emmanuel.rosaslopez.52/"},
        {item : "Twitter",
        link : "https://twitter.com/EmmanuelrosasL2"},
        {item : "YouTube",
        link : "https://www.youtube.com/channel/UCQX-kyuD_i9vqtO0i2FEiew"},
        {item : "Instagram",
        link : "https://www.instagram.com/emmanuel_rosas_lopez/"}
      ];
  }

  render() {
    return html`
      <footer-component .items="${this.items}"></footer-component>
    `;
  }
}

customElements.define(PassFooter.is, PassFooter);
export default PassFooter