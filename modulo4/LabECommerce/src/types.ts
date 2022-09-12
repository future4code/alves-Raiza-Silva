// Type do usuário
export type User = { 
    name: string,
    email: string,
    password: string
}

// Type do produto
export type Product = {
    id: string,
    name: string,
    price: number,
    imageUrl: string
}

// Type da compra
export type TypeCompra = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}