import instance from "./instance";


export const getAll = () => {
    const url = "/categories"
    return instance.get(url)
}

export const getCategory = (id: number) => {
    const url = "/categories/" + id
    return instance.get(url)
}

export const createCategory = (data:any) => {
    const url = "/categories"
    return instance.post(url, data)
}

export const editCategory = (id: any, data:any) => {
    const url = "/categories/" + id
    return instance.patch(url, data)
}

export const deleteCategory = (id :any) => {
    const url = "/categories/" + id
    return instance.delete(url)
}