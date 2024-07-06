import { defineStore } from 'pinia'

type CartItem = {
    id: number;
    name: string;
    imagePath: string;
    quantity: number;
    price: number;
}

export const useCartStore = defineStore('cart',  () => {
    const cartItems: Ref<CartItem[]> = ref([]);

    const isItemExist = (item: Omit<CartItem, 'quantity'>) => cartItems.value.some(cartItem => cartItem.id === item.id);

    function getCartItemQuantity(item: any) {
        return cartItems.value.find((cartItem) => cartItem.id === item.id)
          ?.quantity;
      }
    
    function addCart (item: Omit<CartItem, 'quantity'>) {
        if (isItemExist(item)) {
            cartItems.value = cartItems.value.map(cartItem => {
                if (cartItem.id === item.id) return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                }

                else return cartItem;
            });
        } else {
            cartItems.value = [
                ...cartItems.value,
                {
                    ...item,
                    quantity: 1,
                }
            ];
        }
    }

    function removeCartItem (item: Omit<CartItem, 'quantity'>) {
        cartItems.value = cartItems.value.filter(cartItem => cartItem.id !== item.id);
    }

    function decreaseCartItem (item: Omit<CartItem, 'quantity'>) {
        const itemQuantity = cartItems.value.find(cartItem => cartItem.id === item.id)?.quantity;

        console.log("decreasing", itemQuantity, cartItems.value, item);
        

        if (itemQuantity) {
            if (itemQuantity > 1) {
                cartItems.value = cartItems.value.map(cartItem => {
                    if (cartItem.id === item.id) return {
                        ...cartItem,
                        quantity: cartItem.quantity - 1
                    }
        
                    else return cartItem;
                });
            } else {
                removeCartItem(item);
            }
        }
    }

    return {
        cartItems,
        addCart,
        getCartItemQuantity,
        removeCartItem,
        decreaseCartItem,
    }
})
