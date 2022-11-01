import { LitElement, html, css } from 'lit-element';

class WebComponentData  extends LitElement {

  static get is() {
    return 'web-component-data';
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      
    `;
  }

  /*
  _enviaInfo(info)
  {
    this.dispachEvent(new CustomEvent('Api', {
        detail : {info}, bubbles : true, composed: true
    }));
  }

  obtenerInfo()
  {
    fetch(this.url,{ method : this.method})
        .then((response) => {
            if (response.ok) return response.json();
            return Promise.reject(response);
        })
        .then((data) => { this._enviaInfo;})
        .catch((error) => { console.warn('Error: ' + error)})
  }*/

}

customElements.define(webcomponentdata.is, WebComponentData);
export default WebComponentData