import { useState } from 'react'

import axios from 'axios'

import { CgDetailsMore } from 'react-icons/cg';

// const Collections = require('../server/models/Collections')

function Trait() {

    const [collection, setCollection] = useState('')
    const [fetchedData, setFetchedData] = useState([])

    const handleCollection = (e) => {
        setCollection(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(collection)
        fetchProject()
    }

    async function fetchProject() {

        try {
            let res = await axios.get(`https://api.opensea.io/api/v1/assets`,
            {
                params: {
                    asset_contract_address: collection,
                    //owner: '0x6E8e5A1DcFC3cC93e42Ca79D672Bb87153E07B1E',
                    limit: 50,
                }
            }
            )

            let data = res.data.assets
            setFetchedData(data)
            console.log(fetchedData)
        } catch (e) {
            console.log(e)
        }

        // try {
        //     let res1 = await axios.get(`https://api.opensea.io/api/v1/asset_contract/${collection}`)

        //     let data1 = res1.data

        //     let res2 = await axios.get(`https://api.opensea.io/api/v1/collection/${count}`)

        //     let data2 = res2.data.collection

        //     var cModel = new Collections({
        //         contract_address: collection,
        //         name: data1.name,
        //         slug: data1.collection.slug,
        //         totalSupply: data2.stats.total_supply
        //     })

        //     cModel.save(function(err, doc) {
        //         if (err) return console.error(err);
        //         console.log("Document inserted successfully!");
        //     });
        // } catch (e) {
        //     console.log(e)
        // }
        
    }

    return (
        <div className="max-w-7xl mx-auto font-kanit">
            <div className="text-center">
                <form onSubmit={handleSubmit}>
                    <input className="p-2 pl-4 rounded-lg focus:outline-none bg-gray-100 w-1/3" type="text" placeholder="Search NFT Projects" onInput={(e) => handleCollection(e)} />
                    <button className="ml-2 px-4 py-2 bg-gray-100 rounded-lg">Fetch</button>
                </form>
            </div>
            <div className="float-right">
                {fetchedData.length} results
            </div>
            <div class="flex flex-wrap -mx-3 overflow-hidden mt-8">
                {
                    fetchedData.map((data) => {
                        return (
                            <div key={data.token_id} class="px-3 py-5 w-1/5 overflow-hidden">
                                <div>
                                    <div class="w-60 m-auto max-w-sm">
                                        <div class="bg-white shadow-lg rounded-3xl">
                                            <div className="flex ml-4">
                                                <div class="w-2/3 overflow-hidden">
                                                    <span className="absolute mt-4 bg-gray-50 px-3 py-1 rounded-2xl text-indigo-700">{data.token_id-2312}</span>
                                                    <div className="float-right">
                                                        <span className="absolute mt-4 bg-gray-50 px-3 py-1 rounded-2xl text-indigo-700">#{data.token_id-6312}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={data.image_url} alt="" class="rounded-t-2xl lg:w-full 2xl:w-full 2xl:h-full object-fill"/>
                                            <div className="text-center align-text-center items-center align-middle h-24">
                                                <a href={data.permalink}>
                                                    <button className="w-full py-3 px-3 hover:bg-blue-300 text-blue-500 bg-blue-100">
                                                        OpenSea
                                                    </button>
                                                </a>
                                                <hr className="opacity-20"/>
                                                <button className="w-full py-3 px-3 hover:bg-indigo-300 text-indigo-500 bg-indigo-100 rounded-b-3xl">
                                                    Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }   
                    )
                }
            </div>
        </div>
    )
}

export default Trait