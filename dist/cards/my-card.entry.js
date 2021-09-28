import { r as registerInstance, h } from './index-f4a4fd8c.js';

const myCardCss = ".my-card{max-width:320px;margin:0.75rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));padding:1rem}.my-card:hover{--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.button-container{display:flex;justify-content:center}.my-cards-wrapper{margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:0px;display:flex;flex-wrap:wrap;justify-content:center;max-width:1245px}";

const MyCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    { /* I was trying to make the card reusable and create a cards component
that pulled in the card with configuration but time did not allow */
    }
    { /* <my-text tag={this.headingTag} text={this.headingText}></my-text>
    <my-text tag={this.copyTag} text={this.copyText}></my-text> */
    }
    return (h("div", { class: 'my-cards-wrapper' }, h("div", { class: 'my-card' }, h("my-image", { source: this.imageSource }), h("my-text", { tag: 'h2', text: 'Medication 1' }), h("my-text", { tag: 'p', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum arum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis guod.' }), h("div", { class: 'button-container' }, h("my-button", { text: 'Learn More', type: 'secondary' }), h("my-button", { text: 'Add to Cart', type: 'primary' }))), h("div", { class: 'my-card' }, h("my-image", { source: this.imageSource }), h("my-text", { tag: 'h2', text: 'Medication 1' }), h("my-text", { tag: 'p', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum arum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis guod.' }), h("div", { class: 'button-container' }, h("my-button", { text: 'Learn More', type: 'secondary' }), h("my-button", { text: 'Add to Cart', type: 'primary' }))), h("div", { class: 'my-card' }, h("my-image", { source: this.imageSource }), h("my-text", { tag: 'h2', text: 'Medication 1' }), h("my-text", { tag: 'p', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum arum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis guod.' }), h("div", { class: 'button-container' }, h("my-button", { text: 'Learn More', type: 'secondary' }), h("my-button", { text: 'Add to Cart', type: 'primary' }))), h("div", { class: 'my-card' }, h("my-image", { source: this.imageSource }), h("my-text", { tag: 'h2', text: 'Medication 1' }), h("my-text", { tag: 'p', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum arum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis guod.' }), h("div", { class: 'button-container' }, h("my-button", { text: 'Learn More', type: 'secondary' }), h("my-button", { text: 'Add to Cart', type: 'primary' }))), h("div", { class: 'my-card' }, h("my-image", { source: this.imageSource }), h("my-text", { tag: 'h2', text: 'Medication 1' }), h("my-text", { tag: 'p', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum arum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis guod.' }), h("div", { class: 'button-container' }, h("my-button", { text: 'Learn More', type: 'secondary' }), h("my-button", { text: 'Add to Cart', type: 'primary' })))));
  }
};
MyCard.style = myCardCss;

export { MyCard as my_card };
