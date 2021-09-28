import { newSpecPage } from '@stencil/core/testing';
import { MyText } from './my-text';

describe('my-text', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyText],
      html: '<my-text></my-text>',
    });
    expect(root).toEqualHtml(`
      <my-text>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-text>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyText],
      html: `<my-text first="Stencil" last="'Don't call me a framework' JS"></my-text>`,
    });
    expect(root).toEqualHtml(`
      <my-text first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-text>
    `);
  });
});
