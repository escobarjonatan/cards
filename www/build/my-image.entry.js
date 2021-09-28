import { r as registerInstance, h, g as getAssetPath } from './index-f4a4fd8c.js';

const myImageCss = "img{max-width:100%;max-height:100%;vertical-align:middle}";

const MyImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The first name
     */
    this.source = 'default.jpeg';
  }
  render() {
    return h("img", { src: getAssetPath(`./assets/${this.source}`) });
  }
  static get assetsDirs() { return ["assets"]; }
};
MyImage.style = myImageCss;

export { MyImage as my_image };
