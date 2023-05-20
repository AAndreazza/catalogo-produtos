import React from "react";
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import { useCart } from "../lib/CartContext";

const ShowProductInfo = ({ product }) => {
    const cart = useCart()
    const addToCart = () => {
        cart.addToCart(product)
    }
    return(
        <div className="flex">
            <div className="w-2/3"><img src={product.images[0].resize.src}/></div>
            <div className="w-1/3 p-4">
                <h2 className="text-xl font-bold">{product.product}</h2> 
                <input type="text" placeholder="Quantidade" />
                <br />
                <button onClick={addToCart}>Adicionar ao orçamento</button>
            </div>
        </div> 
    )
}

const Product = ({ data }) => {
    const { product } = data
    return(
        <Layout>
            <ShowProductInfo product={product} />
        </Layout>
    )
}

export const pageQuery = graphql`
    query ($slug: String!) {
            product: contentfulProduct(slug: {eq: $slug}) {
                images {
                  resize(width: 1000, height: 1000) {
                    src
                  }
                }
                product
                slug
              }
    }
`

export default Product