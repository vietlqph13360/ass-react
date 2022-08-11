import instance from "./instance";


export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}

export const getProduct = (id: number) => {
    const url = "/products/" + id
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}

export const editProduct = (id: any, data:any) => {
    const url = "/products/" + id
    return instance.patch(url, data)
}

export const deleteProduct = (id :any) => {
    const url = "/products/" + id
    return instance.delete(url)
}
