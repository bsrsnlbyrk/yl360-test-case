import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SearchInput from './index.vue';

describe('SearchInput', () => {
  it('should bind input value to model correctly', async () => {
    const wrapper = mount(SearchInput);

    const inputElement = wrapper.find('input');

    // Set value on the input element
    await inputElement.setValue('George Orwell');

    // Assert that model value is updated
    // @ts-ignore
    expect(wrapper.vm.model).toBe('George Orwell');
  });
});
