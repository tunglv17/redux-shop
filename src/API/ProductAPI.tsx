import { typeProduct } from "../type/product";
import AxiosClient from "./AxiosClient";
const ProductAPI = {
  getAll() {
    const url = `/product`;
    return AxiosClient.get(url);
  },
  get(id:number) {
    const url = `product/${id}`;
    return AxiosClient.get(url);
  },
  add(data:typeProduct) {
    const url = `/product`;
    return AxiosClient.post(url, data);
  },
  remove(idPro:number){
    const url = `/product/${idPro}`;
    return AxiosClient.delete(url)
  },
  update(data:typeProduct){
    const url = `/product/${data.id}`;
    return AxiosClient.put(url,data) 
}
};
export default ProductAPI;