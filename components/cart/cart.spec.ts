import { describe, it, beforeEach, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing'
import { useCartStore } from '@/store/cart';
import Cart from './index.vue';

describe('Cart', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should get the quantity of a book in the cart', async () => {
    const wrapper = mount(Cart, {
        global: {
          plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })],
        }});

    const store = useCartStore();
    store.getCartItemQuantity = vi.fn().mockReturnValue(2);

    expect(store.getCartItemQuantity(store.cartItems[0])).toBe(2);
  });
});
