import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `polymer-proj`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerProj extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        div {
          border-style: ridge;
          padding: 5%;
          background: rgba(255, 255, 255, 0.5);
        }
      </style>
      <div>
      <h2>[[currentQuote]]</h2>
      <h5>- [[currentAuthor]]</h5>
      <button on-click="generateRandomQuote">New Quote!</button>
      </div>
    `;
  }
  static get properties() {
    return {
      currentQuote: {
        type: String,
        value: 'Seek and ye shall find...',
      },
      currentAuthor: {
        type: String,
        value: 'Literally Everyone'
      }
    };
  }

  constructor() {
    super().ready()
    this.generateRandomQuote.bind(this)
  }

  generateRandomQuote() {
    fetch("https://talaikis.com/api/quotes/random/")
    .then(res => res.json())
    .then(res => {
      this.set('currentQuote', res.quote)
      this.set('currentAuthor', res.author)
      var color = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
      document.body.style.background = color
    })
  }
}

window.customElements.define('polymer-proj', PolymerProj);
