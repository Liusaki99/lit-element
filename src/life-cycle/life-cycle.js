import { LitElement, html, css } from 'lit-element';
import styles from '../js/boostrap-style.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';

class LifeCycle  extends LitElement {

  static get is() {
    return 'life-cycle';
  }

  static get properties() {
    return {
        name:{type : String}
    };
  }

  static get internalProperties() {
    return {
        bandera: {type : Boolean}
    };
  }

  constructor() {
    super();
    this.name = 'life-cycle';
    this.apellidos = "Defecto";
    this.bandera = false;
  }

  static get styles () { 
    return [
      styles,
    ]
  }

  render() {
    return html`
        <p class="letraMono" ?visible="${this.bandera}"> Bienvenido ${this.name} ${this.apellidos}</p>
        <button type="button" class="btn btn-primary" @click="${this.cambiar_dom}">Cambiar Dom</button>
        `
  }

  cambiar_dom() 
  {
    this.bandera = !(this.bandera)
    console.log(this.bandera);
  }

  //Primer metodo que se ejecuta
  connectedCallback()
  {
    super.connectedCallback();
    console.log('connectedCallback');
  };
  // Se ejecuta con el connected y indica si hay algo que deba cambiar
  shouldUpdate()
  {
    console.log('shouldUpdate');
    return true;
  }
  // se ejecuta cuando se realiza el primer cambio en el DOM
  firstUpdated()
  {
    console.log('firstUpdated');
  }

  //Se ejecuta cuando se realiza un cambio en el DOM
  updated(changedProperties)
  {
    console.log('updated');
  }

  //se ejecuta cuando se desconecta el componente
  disconnectedCallback()
  {
    console.log('disconnectedCallback');
  }

  // Hace una llamada cuando los atributos son modificados

  attributeChangedCallback()
  {
    super.attributeChangedCallback();
    console.log('Se cambio el attributo');
  }
}

customElements.define(LifeCycle.is, LifeCycle);
export default LifeCycle