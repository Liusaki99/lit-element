import console from 'console';
import { LitElement, html, css } from 'lit-element';

class WebComp  extends LitElement {

  static get is() {
    return 'web-comp';
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    console.log('Hola');
  }

  render() {
    return html`
      
    `;
  }
}


customElements.define(webcomp.is, WebComp);
export default WebComp