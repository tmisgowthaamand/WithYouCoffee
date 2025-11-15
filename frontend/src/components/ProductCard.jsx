import React, { useState } from 'react'

export default function ProductCard({ product, onAdd }) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const [showQuantitySelector, setShowQuantitySelector] = useState(false)

  const handleQuickAdd = () => {
    try {
      onAdd(product)
      // Show quick feedback
      setIsAdding(true)
      setTimeout(() => setIsAdding(false), 300)
    } catch (error) {
      console.error('Error adding product to cart:', error)
      alert('Error adding product to cart. Please try again.')
    }
  }

  const handleAddToCart = async () => {
    try {
      setIsAdding(true)
      
      // Add multiple quantities if selected
      for (let i = 0; i < quantity; i++) {
        onAdd(product)
      }
      
      // Reset quantity and show feedback
      setTimeout(() => {
        setIsAdding(false)
        setQuantity(1)
        setShowQuantitySelector(false)
      }, 600)
    } catch (error) {
      console.error('Error adding product to cart:', error)
      alert('Error adding product to cart. Please try again.')
      setIsAdding(false)
    }
  }
  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col h-full" style={{pointerEvents: 'auto'}}>
      {/* Popular Badge */}
      {product.popular && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold rounded-full animate-modernGlow">
          Popular
        </div>
      )}

      {/* Quick Add Floating Button */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <button 
          onClick={handleQuickAdd}
          disabled={isAdding}
          className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center disabled:opacity-50 cursor-pointer"
          title="Quick Add to Cart"
          style={{zIndex: 20, position: 'relative'}}
        >
          {isAdding ? (
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Product Image */}
      <div className="relative h-40 bg-gray-50 rounded-t-2xl overflow-hidden flex items-center justify-center">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        {/* Fallback for missing images */}
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30" style={{display: product.image ? 'none' : 'flex'}}>
          {product.category === 'Tea' && '🫖'}
          {product.category === 'Coffee' && '☕'}
          {product.category === 'Milk' && '🥛'}
          {product.category === 'Shake' && '🥤'}
          {product.category === 'Juice' && '🧃'}
          {product.category === 'Snacks' && '🍪'}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
            {product.category}
          </span>
        </div>
        
        <h4 className="font-bold text-base text-gray-900 mb-2">
          {product.name}
        </h4>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
          {product.description}
        </p>

        {/* Price and Add Button */}
        <div className="flex flex-col gap-3 mt-auto">
          <div className="flex items-baseline justify-center">
            <span className="text-2xl font-black text-amber-600">
              ₹{product.price}
            </span>
            {showQuantitySelector && quantity > 1 && (
              <span className="text-sm text-gray-500 ml-2">
                (₹{(product.price * quantity).toFixed(2)} total)
              </span>
            )}
          </div>
          
          {!showQuantitySelector ? (
            /* Quick Add Buttons */
            <div className="flex gap-2">
              <button 
                onClick={handleQuickAdd}
                disabled={isAdding}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                style={{zIndex: 10, position: 'relative'}}
              >
                {isAdding ? (
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                ) : (
                  <>
                    <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0V19a2 2 0 002 2h7a2 2 0 002-2v-0" />
                    </svg>
                    Add
                  </>
                )}
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setShowQuantitySelector(true)
                }}
                className="px-3 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer active:bg-gray-300"
                style={{zIndex: 10, position: 'relative'}}
                title="Select Quantity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          ) : (
            /* Quantity Selector Mode */
            <>
              <div className="flex items-center justify-center gap-4 mb-2 bg-white/50 rounded-lg p-2" style={{pointerEvents: 'auto', position: 'relative', zIndex: 20}}>
                <button 
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setQuantity(Math.max(1, quantity - 1))
                  }}
                  disabled={quantity <= 1}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 text-gray-700 flex items-center justify-center transition-all duration-200 cursor-pointer select-none active:scale-95 shadow-sm"
                  style={{zIndex: 25, position: 'relative'}}
                >
                  <span className="text-xl font-black leading-none">−</span>
                </button>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border">
                  <span className="text-xl font-bold text-gray-900 select-none">{quantity}</span>
                </div>
                <button 
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setQuantity(quantity + 1)
                  }}
                  className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition-all duration-200 cursor-pointer select-none active:scale-95 shadow-sm"
                  style={{zIndex: 25, position: 'relative'}}
                >
                  <span className="text-xl font-black leading-none">+</span>
                </button>
              </div>
              
              <div className="flex gap-2" style={{position: 'relative', zIndex: 20}}>
                <button 
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleAddToCart()
                  }}
                  disabled={isAdding}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  style={{zIndex: 25, position: 'relative'}}
                >
                  {isAdding ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Adding...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0V19a2 2 0 002 2h7a2 2 0 002-2v-0" />
                      </svg>
                      Add ({quantity})
                    </>
                  )}
                </button>
                <button 
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setShowQuantitySelector(false)
                    setQuantity(1)
                  }}
                  className="px-3 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer active:bg-gray-300"
                  style={{zIndex: 25, position: 'relative'}}
                  title="Cancel"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Shimmer Effect - Disabled to prevent click interference */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  )
}
