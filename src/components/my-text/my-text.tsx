import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-text',
  styleUrl: 'my-text.css',
  shadow: true,
})
export class MyText {
  /**
   * The first name
   */
  @Prop() tag: string;

  /**
   * The middle name
   */
  @Prop() text: string;

  render() {
    const DynamicTag = this.tag;

    console.log(this.tag);

    return <DynamicTag>{this.text}</DynamicTag>;
  }
}
