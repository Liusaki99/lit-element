import { LitElement, html, css } from 'lit-element';

class FooterComponent  extends LitElement {

  static get is() {
    return 'footer-component';
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
      link : "http://www.facebook.com/"},
      {item : "Twitter",
      link : "http://twitter.com/"},
      {item : "YouTube",
      link : "http://youtube.com/"}
    ];
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <ul class="list-unstyled">
      ${this.items.map(item => 
        html`
          <li class="mb-2"><a href="${item.link}">${item.item}</a></li>
        `)}
    </ul>
    `;
  }
}

customElements.define(FooterComponent.is, FooterComponent);
export default FooterComponent