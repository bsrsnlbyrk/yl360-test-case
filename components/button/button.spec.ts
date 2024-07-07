import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './index.vue';

describe('Button', () => {
  it('renders text prop correctly', async () => {
    const buttonText = 'Click me';

    const wrapper = mount(Button, {
      props: {
        text: buttonText,
      },
    });

    // Assert that the button text is rendered correctly
    expect(wrapper.find('button').text()).toBe(buttonText);
  });

  it('renders slot content when no text prop is provided', async () => {
    const slotContent = '<span>Custom content</span>';

    const wrapper = mount(Button, {
      slots: {
        default: slotContent,
      },
    });

    // Assert that the slot content is rendered correctly
    expect(wrapper.find('button').html()).toContain(slotContent);
  });

  it('emits clicked event when button is clicked', async () => {
    const wrapper = mount(Button);

    // Simulate click on the button
    await wrapper.find('button').trigger('click');

    // Assert that 'clicked' event is emitted
    expect(wrapper.emitted('clicked')).toBeTruthy();
  });
});
