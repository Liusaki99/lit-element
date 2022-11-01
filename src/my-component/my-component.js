import { LitElement, html, css } from 'lit-element';
import * as Boostrap from 'bootstrap';
import styles from '../js/boostrap-style.js';

class MyComponent  extends LitElement {

  static get is() {
    return 'my-component';
  }

  static get properties() {
    return {
        name:{type : String}
    };
  }

  constructor() {
    super();
    this.name = "Default";
  }

  static get styles ()
  {
    return [
      styles,
    ]
  }

  render() {
    console.log(styles);
    console.log(typeof(styles));
    return html`
    <h1 class="display-4 fw-bold lh-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bienvenido: ${this.name} Este Es Mi Pagina Web y Aqui se Ama la Cultura JDM</font></font></h1>
    `;
  }
}

customElements.define(MyComponent.is, MyComponent);
export default MyComponent