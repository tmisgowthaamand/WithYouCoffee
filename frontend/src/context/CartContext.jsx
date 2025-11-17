import React, { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

// Cart reducer for state management
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity === 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id)
        }
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      }

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      }

    case 'LOAD_CART':
      return {
        ...state,
        items: Array.isArray(action.payload) ? action.payload : []
      }

    default:
      return state
  }
}

// Initial state
const initialState = {
  items: [] // Always ensure items is an array
}

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cuptime_cart')
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart)
        // Ensure parsed data is an array
        dispatch({ type: 'LOAD_CART', payload: Array.isArray(parsed) ? parsed : [] })
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error)
        dispatch({ type: 'LOAD_CART', payload: [] })
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cuptime_cart', JSON.stringify(state.items))
  }, [state.items])

  // Cart calculations
  const cartTotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0)
  const gstRate = 0.05 // 5% GST
  const gstAmount = cartTotal * gstRate
  const finalTotal = cartTotal + gstAmount

  // Cart actions
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
  }

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const value = {
    items: state.items,
    cartTotal,
    cartItemCount,
    gstAmount,
    gstRate,
    finalTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export default CartContext
