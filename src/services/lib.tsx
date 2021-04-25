import axios from "axios";
import { getCookie } from "../containers/cookies";

// Backend URL
export const API_URL = "https://omaarmarketplace.herokuapp.com/api/";

class Api {
  instance: any;

  constructor(token = "") {
    this.instance = axios.create({
      baseURL: API_URL,
    });

    this.attachInterceptor(token);
  }

  attachInterceptor(token: string) {
    /*
         Intercept request and attach Authorization headers
         note: this caters for both server side and client side request.
         */
    this.instance.interceptors.request.use(
      (config: any) => {
        config.headers.Authorization = `Bearer ${
          process.browser ? getCookie("token") : token
        }`;
        return config;
      },
      (error: any) => Promise.reject(error)
    );
  }

  auth() {
    return {
      login: (data: any) => this.instance.post(`auth/tokens/`, data),
      register: (data: any) => this.instance.post(`auth/create_user/`, data),
      profile: () => this.instance.get(`auth/profile/`),
      updateProfile: (data: any) =>
        this.instance.put(`auth/profile/${data.id}`, data),
    };
  }

  order() {
    return {
      orders: () => this.instance.get(`orders/`),
      placeOrder:(data:any) =>this.instance.post(`orders/create/`,data),
      addresses: () => this.instance.get(`orders/address/`),
      createAddress: (data: any) => this.instance.post(`orders/address/`, data),
      updateAddress: (data: any) =>
        this.instance.put(`orders/address/${data.id}/`, data),
      deleteAddress: (id: number) =>
        this.instance.delete(`orders/address/${id}`),
      mpesa:(data:any)=>this.instance.post(`orders/online/stk_push`,data),
      mpesaPaymentStatus:(data:any)=>this.instance.post(`orders/payment/mpesa/check_status`,data)
    };
  }

  products() {
    return {
      getCategories: () => this.instance.get(`products/categories/`),
      getSubCategory: (id: any) =>
        this.instance.get(`products/categories/${id}/`),
      getProducts: (id: any) =>
        this.instance.get(`products/categories/${id}/products`),

    };
  }
}

export default Api;
