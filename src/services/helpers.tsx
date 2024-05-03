export const getBearerToken = () => {
    const token = sessionStorage.getItem('lte_token')
    return `Bearer ${token}`
}
export const getToken = () => {
    const token = sessionStorage.getItem('lte_token')
    return token
}