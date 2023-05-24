import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useCart } from '../lib/CartContext'

const Cart = () => {
    const cart = useCart()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const remove = slug => () => {
        cart.removeFromCart(slug)
    }
    const addToCart = (slug, qty) => () => {
        cart.addToCart({ slug }, qty)
    }
    const onChangeName = evt => {
        setName(evt.target.value)
    }
    const onChangeEmail = evt => {
        setEmail(evt.target.value)
    }
    return(
        <Layout> 
            <h1 className='font-bold text-lg py-6'>My Cart</h1>
            {cart.size === 0 &&
                <div 
                    className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" 
                    role="alert"
                >
                <p className="font-bold">Atenção</p>
                <p>Seu carrinho está vazio. Para pedidos de orçamento, navege pelos produtos e adicione ao carrinho.</p>
                </div> 
            }
            {
                Object
                    .keys(cart.cart)
                    .map(slug => {
                        const product = cart.cart[slug]
                        return(
                            <div className='border rouded py-6 px-4 mb-4' key={slug}>
                                <h2 className='font-bold'>{product.product}</h2>
                                <p>
                                    Quantidade:  
                                    { product.qty > 1 && <button 
                                        disabled = { product.qty <= 1}
                                        onClick={addToCart(slug, -1)} 
                                        className='disabled:opacity-75 p-1 bg-red-300 hover:bg-red-600 rounded'
                                    > 
                                        - 
                                    </button>}
                                    <span className='p-2'>{product.qty}</span> 
                                    <button 
                                        onClick={addToCart(slug, +1)} 
                                        className='p-1 bg-green-300 hover:bg-green-600 rounded'
                                    >
                                        +
                                    </button>
                                    </p>
                                <button 
                                    className='mt-2 py-2 px-4 bg-red-300 hover:bg-red-600 rounded' 
                                    type='button' 
                                    onClick={remove(slug)}
                                >
                                    Remover
                                </button>
                            </div>
                        )
                    })}
                    { cart.size > 0 && 
                    <div className='shadow rounded p-6'> 
                        <h3 className='font-bold text-lg'>Seus dados:</h3>
                        <label className='block py-2'>
                            Nome: 
                            <input className='border' type='text' name='name' onChange={onChangeName} />
                        </label>
                        <label className='block py-2'>
                            Email: 
                            <input className='border' type='text' email='email' onChange={onChangeEmail} />
                            </label>
                        <button className='bg-gray-200 p-3'>Enviar Pedido</button>
                    </div>}
        </Layout>
    )
}

export default Cart