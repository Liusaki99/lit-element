import { LitElement, html, css } from 'lit-element';
import styles from '../js/boostrap-style.js';
import '../js/boostrap.bundle.js';


class NavmenuComponent  extends LitElement {

  static get is() {
    return 'navmenu-component';
  }

  static get properties() {
    return {
      username:{type : String},
      profilepicture:{type : String}
    };
  }

  constructor() {
    super();
    this.username = "Example";
    this.profilepicture = "./src/images/pic.png";
  }

  static get styles() {
    return [
      styles,
    ]
  }

  render() {
    return html`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Mi Ejemplo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Extras</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Galeria</a>
                    </li>
                </ul>
                <span class="navbar-text position-absolute end-0 pe-2">
                    Bienvenido: ${this.username}
                    <a class="navbar-brand" href="#">
                      <img src="${this.profilepicture}" alt="" width="50" height="50">
                    </a>
                </span>
            </div>
        </div>
    </nav>
    `;
  }
}


customElements.define(NavmenuComponent.is, NavmenuComponent);
export default NavmenuComponent