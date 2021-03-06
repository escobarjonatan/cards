/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface MyButton {
        /**
          * The text name
         */
        "text": string;
        /**
          * The type name
         */
        "type": string;
    }
    interface MyCard {
        /**
          * The copyTag name
         */
        "copyTag": string;
        /**
          * The copyText name
         */
        "copyText": string;
        /**
          * The headingTag name
         */
        "headingTag": string;
        /**
          * The headingText name
         */
        "headingText": string;
        /**
          * The first name
         */
        "imageSource": string;
    }
    interface MyImage {
        /**
          * The first name
         */
        "source": string;
    }
    interface MyText {
        /**
          * The first name
         */
        "tag": string;
        /**
          * The middle name
         */
        "text": string;
    }
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyCardElement extends Components.MyCard, HTMLStencilElement {
    }
    var HTMLMyCardElement: {
        prototype: HTMLMyCardElement;
        new (): HTMLMyCardElement;
    };
    interface HTMLMyImageElement extends Components.MyImage, HTMLStencilElement {
    }
    var HTMLMyImageElement: {
        prototype: HTMLMyImageElement;
        new (): HTMLMyImageElement;
    };
    interface HTMLMyTextElement extends Components.MyText, HTMLStencilElement {
    }
    var HTMLMyTextElement: {
        prototype: HTMLMyTextElement;
        new (): HTMLMyTextElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-card": HTMLMyCardElement;
        "my-image": HTMLMyImageElement;
        "my-text": HTMLMyTextElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        /**
          * The text name
         */
        "text"?: string;
        /**
          * The type name
         */
        "type"?: string;
    }
    interface MyCard {
        /**
          * The copyTag name
         */
        "copyTag"?: string;
        /**
          * The copyText name
         */
        "copyText"?: string;
        /**
          * The headingTag name
         */
        "headingTag"?: string;
        /**
          * The headingText name
         */
        "headingText"?: string;
        /**
          * The first name
         */
        "imageSource"?: string;
    }
    interface MyImage {
        /**
          * The first name
         */
        "source"?: string;
    }
    interface MyText {
        /**
          * The first name
         */
        "tag"?: string;
        /**
          * The middle name
         */
        "text"?: string;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-card": MyCard;
        "my-image": MyImage;
        "my-text": MyText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-card": LocalJSX.MyCard & JSXBase.HTMLAttributes<HTMLMyCardElement>;
            "my-image": LocalJSX.MyImage & JSXBase.HTMLAttributes<HTMLMyImageElement>;
            "my-text": LocalJSX.MyText & JSXBase.HTMLAttributes<HTMLMyTextElement>;
        }
    }
}
