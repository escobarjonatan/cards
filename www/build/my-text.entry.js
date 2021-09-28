import { r as registerInstance, h } from './index-f4a4fd8c.js';

const myTextCss = "h2{margin-top:0.75rem;margin-bottom:0.75rem;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"}p{margin-top:0.5rem;margin-bottom:0.5rem;margin-bottom:0.75rem;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}";

const MyText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const DynamicTag = this.tag;
    console.log(this.tag);
    return h(DynamicTag, null, this.text);
  }
};
MyText.style = myTextCss;

export { MyText as my_text };
