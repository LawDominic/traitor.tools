import bodyNft from '../images/body-nft.png';

function Home() {
    return (
        <div class="max-w-6xl mx-auto">
            <div className="flow-root">
                <span className="font-kanit float-left w-2/5 mt-56 text-indigo-900">
                    <p className="text-5xl">An NFT tool built for the Ethereum blockchain.</p>
                    <p className="text-xl text-gray-800 mt-4">The all-in-one package for NFT degens wanting to check traits and view analytics.</p>
                </span>
                <img src={bodyNft} className="float-right h-96 mr-12 mt-24"/>
            </div>
        </div>
    )
}

export default Home