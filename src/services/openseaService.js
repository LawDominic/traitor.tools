import axios from "axios"

const assetsAPI = 'https://api.opensea.io/api/v1/assets'
const asset_contractAPI = 'https://api.opensea.io/api/v1/asset_contract/'
const collectionAPI = 'https://api.opensea.io/api/v1/collection/'

const fetchCollectionCA = (contractAddress) => {
    return axios.get(asset_contractAPI + contractAddress)
        .then(res => res.data)
}

const fetchCollectionSlug = (slug) => {
    return axios.get(collectionAPI + slug)
        .then(res => res.data)
}

const fetchAssets = (contractAddress, ownerAddress) => {
    return axios.get(assetsAPI, {
        params: {
            contractAddress,
            ownerAddress,
            limit: 50
        }
    })
        .then(res => res.data)
}

export default {
    fetchCollectionCA,
    fetchCollectionSlug,
    fetchAssets
}