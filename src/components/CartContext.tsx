"use client";
import { createContext, useContext, useEffect, useState } from "react";

export interface CartProduct {
  name: string;
  price: number;
  amount: number;
  imageUrl: string;
}

interface CartContextType {
  cartProducts: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productName: string) => void;
  updateAmount: (productName: string, amount: number) => void;
  clearCart: () => void;
}

const STORAGE_KEY = "audiophile_cart";

const CartContext = createContext<CartContextType>({
  cartProducts: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateAmount: () => {},
  clearCart: () => {},
});

export const calculateCartTotal = (items: CartProduct[]) =>
  items.reduce((sum, it) => sum + it.price * it.amount, 0);

export const getCartItemsCount = (items: CartProduct[]) =>
  items.reduce((sum, it) => sum + it.amount, 0);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartProducts, setCartProduct] = useState<CartProduct[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartProduct[]) : [];
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartProducts));
      console.log(cartProducts);
    } catch (e) {
      console.error("Failed to write cart to localStorage", e);
    }
  }, [cartProducts]);

  const addToCart = (product: CartProduct) => {
    setCartProduct((prev) => {
      const exists = prev.find((p) => p.name === product.name);
      if (exists) {
        return prev.map((p) =>
          p.name === product.name
            ? { ...p, amount: p.amount + (product.amount || 1) }
            : p
        );
      }
      return [...prev, { ...product, amount: product.amount || 1 }];
    });
  };

  const removeFromCart = (productName: string) => {
    setCartProduct((prev) => prev.filter((p) => p.name !== productName));
  };

  const updateAmount = (productName: string, amount: number) => {
    setCartProduct((prev) => {
      if (amount <= 0) {
        return prev.filter((p) => p.name !== productName);
      }
      return prev.map((p) => (p.name === productName ? { ...p, amount } : p));
    });
  };

  const clearCart = () => setCartProduct([]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeFromCart,
        updateAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
