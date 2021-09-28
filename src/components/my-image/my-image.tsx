import { Component, getAssetPath, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-image',
  styleUrl: 'my-image.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MyImage {
  /**
   * The first name
   */
  @Prop() source: string = 'default.jpeg';


  render() {
    return <img src={getAssetPath(`./assets/${this.source}`)}/>;
  }
}
