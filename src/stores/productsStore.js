import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '../services/Toast/APIService'
import { isSuccess } from '../utils/helperMethods'
import router from '../router'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])
  const relatedBrands = ref([])
  const relatedCategories = ref([])
  const totalPagesCount = ref(0)
  const error = ref('')
  const loading = ref(false)
  const filters = ref({})

  const parseAndSetFilter = (queryParams, filterName, filterKeys) => {
    if (queryParams[filterName]) {
      const numbers = queryParams[filterName].match(/\d+/g)
      const numbersAsIntegers = numbers.map(Number)
      filters.value[filterName] = {}
      filterKeys.forEach((key, index) => {
        filters.value[filterName][key] = numbersAsIntegers[index]
      })
    }
  }

  const fetchProducts = async (queryParams = {}) => {
    loading.value = true
    filters.value = { ...queryParams }

    parseAndSetFilter(queryParams, 'priceRange', ['min', 'max'])
    parseAndSetFilter(queryParams, 'numberOfReviews', ['min', 'max'])
    parseAndSetFilter(queryParams, 'weightRange', ['min', 'max'])
    parseAndSetFilter(queryParams, 'dimensions', ['length', 'width', 'height'])

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

  const applyFilter = async () => {
    const params = { ...filters.value }

    for (const filterName in params) {
      const filterObj = params[filterName]

      if (filterObj) {
        if (typeof filterObj === 'object') {
          params[filterName] = Object.values(filterObj).join(', ')
          if (params[filterName] === ', ') delete params[filterName]
        }
      }
      if (params[filterName]?.length === 0) {
        delete params[filterName]
      }
    }
    router.push({ path: '/products', query: params })
  }

  const setFilterValue = (field, value, index = null) => {
    if (index) {
      filters.value[field] = filters.value[field] || {}
      filters.value[field][index] = value
    } else {
      filters.value[field] = value
    }
  }

  const clearFilter = () => {
    filters.value = {}
    router.push({ path: '/products' })
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
    setFilterValue,
    clearFilter
  }
})
