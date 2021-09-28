import { newSpecPage } from '@stencil/core/testing';
import { MyImage } from './my-image';

describe('my-image', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyImage],
      html: '<my-image></my-image>',
    });
    expect(root).toEqualHtml(`
      <my-image>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-image>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyImage],
      html: `<my-image first="Stencil" last="'Don't call me a framework' JS"></my-image>`,
    });
    expect(root).toEqualHtml(`
      <my-image first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-image>
    `);
  });
});
