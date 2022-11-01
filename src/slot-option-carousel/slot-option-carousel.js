import { LitElement, html, css } from 'lit-element';
import '../carousel-component/carousel-component.js';

class SlotOptionCarousel  extends LitElement {

  static get is() {
    return 'slot-option-carousel';
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    
  }

  render() {
    return html`
      <div>

        <slot name="uno">

        </slot>

      </div>
    `;
  }
}


customElements.define(SlotOptionCarousel.is, SlotOptionCarousel);
export default SlotOptionCarousel