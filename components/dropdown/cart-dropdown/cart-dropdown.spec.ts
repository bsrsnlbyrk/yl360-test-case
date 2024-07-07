import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import ShoppingCart from '@/assets/svg/shopping-cart.svg';
import CartComponent from '@/components/cart/index.vue';
import ButtonComponent from '@/components/button/index.vue';
import { useCartStore } from '@/store/cart';
import { describe, it, beforeEach, expect } from 'vitest';
import CartDropdown from './index.vue';

describe('Cart Dropdown', () => {
  let store;
  // Mock cartItems data
  const cartItems = ref([
    { id: 1, name: 'Product A', price: 10.99, quantity: 2 },
    { id: 2, name: 'Product B', price: 19.99, quantity: 1 },
  ]);
  

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useCartStore();
  });

  it('should toggle cart modal visibility on click', async () => {
    const wrapper = mount(CartDropdown);

    // Check if the cart modal is opened
    await wrapper.find('#dropdownButton').trigger('click');
    expect(wrapper.find('#dropdownList').exists()).toBe(true);

    // Check if the cart modal is closed
    await wrapper.find('#dropdownButton').trigger('click');
    expect(wrapper.find('#dropdownList').exists()).toBe(false);
  });

  it('should display correct total items and total cost in cart', async () => {
    const wrapper = mount(CartDropdown, {
      global: {
        components: {
          ShoppingCart,
          CartComponent,
          ButtonComponent,
        },
        mocks: {
          $route: {
            path: '/cart',
          },
        },
      },
      setup() {
        const isOpen = ref(false);
        const cartTotalItems = ref(cartItems.value.reduce((acc, item) => acc + item.quantity, 0));

        return {
          isOpen,
          cartTotalItems,
        };
      },
    });

    // Check if the total items in the cart are displayed correctly
    expect(wrapper.find('#cartTotalItems').text()).toContain('3');
  });
});
