import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  /**
   * The first name
   */
  @Prop() imageSource: string;
  /**
   * The headingTag name
   */
  @Prop() headingTag: string;
  /**
   * The headingText name
   */
  @Prop() headingText: string;
  /**
   * The copyTag name
   */
  @Prop() copyTag: string;
  /**
   * The copyText name
   */
  @Prop() copyText: string;

  render() {
          {/* I was trying to make the card reusable and create a cards component
      that pulled in the card with configuration but time did not allow */}
      {/* <my-text tag={this.headingTag} text={this.headingText}></my-text>
      <my-text tag={this.copyTag} text={this.copyText}></my-text> */}
    return (
    <div class='my-cards-wrapper'>
      <div class='my-card'>
        <my-image source={this.imageSource}></my-image>
        <my-text tag='h2' text='Medication 1'></my-text>
        <my-text tag='p' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum arum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis guod.'></my-text>
        <div class='button-container'>
          <my-button text='Learn More' type='secondary'></my-button>
          <my-button text='Add to Cart' type='primary'></my-button>
        </div>
      </div>
      <div class='my-card'>
        <my-image source={this.imageSource}></my-image>
        <my-text tag='h2' text='Medication 1'></my-text>
        <my-text tag='p' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum arum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis guod.'></my-text>
        <div class='button-container'>
          <my-button text='Learn More' type='secondary'></my-button>
          <my-button text='Add to Cart' type='primary'></my-button>
        </div>
      </div>
      <div class='my-card'>
        <my-image source={this.imageSource}></my-image>
        <my-text tag='h2' text='Medication 1'></my-text>
        <my-text tag='p' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum arum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis guod.'></my-text>
        <div class='button-container'>
          <my-button text='Learn More' type='secondary'></my-button>
          <my-button text='Add to Cart' type='primary'></my-button>
        </div>
      </div>
      <div class='my-card'>
        <my-image source={this.imageSource}></my-image>
        <my-text tag='h2' text='Medication 1'></my-text>
        <my-text tag='p' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum arum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis guod.'></my-text>
        <div class='button-container'>
          <my-button text='Learn More' type='secondary'></my-button>
          <my-button text='Add to Cart' type='primary'></my-button>
        </div>
      </div>
      <div class='my-card'>
        <my-image source={this.imageSource}></my-image>
        <my-text tag='h2' text='Medication 1'></my-text>
        <my-text tag='p' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum arum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis guod.'></my-text>
        <div class='button-container'>
          <my-button text='Learn More' type='secondary'></my-button>
          <my-button text='Add to Cart' type='primary'></my-button>
        </div>
      </div>
    </div>
    );
  }
}
