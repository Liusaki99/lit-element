import { LitElement, html, css } from 'lit-element';
import '../slot-option-carousel/slot-option-carousel.js';
import style from '../js/boostrap-style.js';

class CarouselComponent  extends LitElement {

  static get is() {
    return 'carousel-component';
  }

  static get properties() {
    return {
      img1 : {type : String},
      img2 : {type : String},
      img3 : {type : String}
    };
  }

  constructor() {
    super();
    this.img1 = '';
    this.img2 = '';
    this.img3 = '';
  }

  static get styles() {
    return [
      style,
    ]
  }

  render() {
    return html`
      <div>
        <slot-option-carousel>
          <div slot="uno">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${this.img1}" class="d-block w-100" alt="Img no se cargo">
              </div>
              <div class="carousel-item">
                <img src="${this.img2}" class="d-block w-100" alt="Img no se cargo">
              </div>
              <div class="carousel-item">
                <img src="${this.img3}" class="d-block w-100" alt="Img no se cargo">
              </div>
            </div>
          </div>
        </slot-option-carousel>
      </div>
    `;
  }
}

customElements.define(CarouselComponent.is, CarouselComponent);
export default CarouselComponent