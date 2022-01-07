import { typeCategory } from "../type/product";
import AxiosClient from "./AxiosClient";
const CategoryAPI = {
  getAll() {
    const url = `/category`;
    return AxiosClient.get(url);
  },
  get(id:number) {
    const url = `category/${id}`;
    return AxiosClient.get(url);
  },
  add(data:typeCategory) {
    const url = `/category`;
    return AxiosClient.post(url, data);
  },
  remove(idPro:number){
    const url = `/category/${idPro}`;
    return AxiosClient.delete(url)
  },
  update(data:typeCategory){
    const url = `/category/${data.id}`;
    return AxiosClient.put(url,data) 
}
};
export default CategoryAPI;