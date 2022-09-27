import { LitElement, html, css } from 'lit-element';

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
        apellidos:{type : String}
    };
  }

  constructor() {
    super();
    this.name = 'life-cycle';
    this.apellidos = "Defecto";
  }

  render() {
    return html`
      <p> Bienvenido ${this.name} ${this.apellidos}</p>
      <button @click="${this.cambiar_apellidos}">Cambiar Dom</button>
    `;
  }

  cambiar_apellidos() 
  {
    //this.name = "Andres";
    this.apellidos = "Rosas Lopez";
    console.log("boton presionado" + this.apellidos);
    //this.render();
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