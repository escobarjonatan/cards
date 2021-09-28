import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  /**
   * The type name
   */
  @Prop() type: string;

  /**
   * The text name
   */
  @Prop() text: string;

  render() {
    return <button class={`btn btn-${this.type}`} type='button'>{this.text}</button>;
  }
}
