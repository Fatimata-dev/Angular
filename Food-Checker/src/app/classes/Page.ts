import { Produit } from "./produit";

export interface Page {
    page: number
    page_count: number
    page_size: 24
    products: Produit[]
}
export interface PageDetail {
    code: string
    product: Produit
    status: number
    status_verbose: string

}