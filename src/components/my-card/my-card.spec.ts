import { newSpecPage } from '@stencil/core/testing';
import { MyCard } from './my-card';

describe('my-card', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyCard],
      html: '<my-card></my-card>',
    });
    expect(root).toEqualHtml(`
      <my-card>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-card>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyCard],
      html: `<my-card first="Stencil" last="'Don't call me a framework' JS"></my-card>`,
    });
    expect(root).toEqualHtml(`
      <my-card first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-card>
    `);
  });
});
