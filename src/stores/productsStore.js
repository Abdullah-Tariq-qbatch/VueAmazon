import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '../services/APIService'
import { isSuccess } from '../utils/helperMethods'
import router from '../router'

import { useAuthStore } from './authStore'


export const useProductsStore = defineStore('products', () => {
  const products = ref([])
  const relatedBrands = ref([])
  const relatedCategories = ref([])
  const totalPagesCount = ref(0)
  const error = ref('')
  const loading = ref(false)
  const filters = ref({})
  const product = ref({})

  const fetchProducts = async (queryParams = {}) => {
    loading.value = true
    filters.value = queryParams
    try {
      const res = await api.get('/products?perPage=8', { params: queryParams })
      if (isSuccess(res)) {
        products.value = res.data.allProducts
        relatedBrands.value = res.data.relatedBrands
        relatedCategories.value = res.data.relatedCategories
        totalPagesCount.value = res.data.totalCount
        loading.value = false
        return products.value
      }
    } catch (err) {
      console.error(err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const applyFilter = async (filtersParams) => {
    let search = '';
    if (filters.value.search) search = filters.value.search
    filters.value = filtersParams
    if (search.length > 0) filters.value.search = search
    router.push({ path: '/products', query: filters.value })
  }

  const setPage = async (pageNumber) => {
    filters.value['pageNo'] = pageNumber
    router.push({ path: '/products', query: filters.value })
  }

  const setSearch = async (keyword) => {
    filters.value = {}
    if (keyword.value) filters.value['search'] = keyword.value
    router.push({ path: '/products', query: filters.value })
  }

  const clearFilter = () => {
    let search = '';
    if (filters.value.search) search = filters.value.search
    filters.value = {}
    if (search.length > 0) filters.value.search = search
    
    router.push({ path: '/products', query: filters.value })
  }

  const getProductDetail = async (id) => {
    const authStore = useAuthStore()

    const user = authStore.getUser()
    console.log(user);

    const res = await api.get(`/products/details/${id}?userId=${user.id}`)
    if (isSuccess(res)) {
      product.value = res.data.productDetails
      console.log(res);
      return product.value
    }
    console.log(res);

  }

  return {
    products,
    relatedBrands,
    relatedCategories,
    totalPagesCount,
    error,
    filters,
    loading,
    applyFilter,
    fetchProducts,
    clearFilter,
    setPage,
    setSearch,
    getProductDetail
  }
})
