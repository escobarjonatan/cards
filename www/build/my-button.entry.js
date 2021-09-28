import { r as registerInstance, h } from './index-f4a4fd8c.js';

const myButtonCss = ":host{--primary-color:#3C289B;--secondary-color:#ECECEC;--terciary-color:#3B3B3B}.btn{margin-left:0.75rem;margin-right:0.75rem;cursor:pointer;border-style:none;background-color:transparent;padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:600;display:flex;align-items:center;justify-content:center}.btn-primary{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));background-color:var(--primary-color)}.btn-secondary{text-decoration:underline;background-color:var(--secondary-color);color:var(--primary-color)}";

const MyButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("button", { class: `btn btn-${this.type}`, type: 'button' }, this.text);
  }
};
MyButton.style = myButtonCss;

export { MyButton as my_button };
