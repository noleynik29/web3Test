import Web3 from "web3"

const provider = 'https://mainnet.infura.io/v3/624f25a94ee046cb9befe2d49ba0be5a'
const web3 = new Web3(new Web3.providers.HttpProvider(provider))
const tokenAddresses = [
    '0x0DE0Fa91b6DbaB8c8503aAA2D1DFa91a192cB149',  //Ethereum
    '0x58b6a8a3302369daec383334672404ee733ab239',  //Livepeer Token
    '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',  //Sai Stablecoin
    '0x61fd1c62551850d0c04c76fce614cbced0094498',  //IDKToken
    '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',  //HEX
    '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',  //LoopringCoin V2
    '0xbddab785b306bcd9fb056da189615cc8ece1d823',  //Ebakus
    '0xe530441f4f73bdb6dc2fa5af7c3fc5fd551ec838',  //GSENetwork
    '0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce',  //Amber
    '0x4092678e4e78230f46a1534c0fbc8fa39780892b',  //OCoin
    '0x4c1c4957d22d8f373aed54d0853b090666f6f9de',  //Silverway
    '0xd3ace836e47f7cf4948dffd8ca2937494c52580c',  //BOB Tokens  
    '0x04ad70466a79dd1251f22ad426248088724ff32b',  //Time-Honored Brand Chain
    '0x4E0b2A80E158f8d28a2007866ab80B7f63bE6076',  //Owlswap.org
    '0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e',  //KickToken
    '0x7b2f9706cd8473b4f5b7758b0171a9933fc6c4d6',  //An Etheal Promo
    '0x617a36Bd36ef8778AA1F12bC32739bFc96cb76E1',  //Bermuda triangle
    '0xa6d1537b3699905ac18a10718b282661425fd662',  //amto.site
    '0xD4DE05944572D142fBf70F3f010891A35AC15188',  //Bulleon Promo Token
    '0xaF47ebBd460F21c2b3262726572CA8812d7143B0',  //Promodl
    '0xCdC94877E4164D2e915fC5E8310155D661A995F1',  //spingame.me
    '0x5245789633B5D0eBD21e393c3d7eAD22d5Ad1517',  //Shaggy Coin
    '0x4b4F19bB433D4EDD2B4687dA36492d37Ea63BFBb',  //fungame.click
    '0x70c18f2fdcb00d27494f767503874788e35c9940',  //lenusd.shop
    '0x916db810de68A6EA1F3BA9aDa7Ba87A5dF3fcF58',  //Etherwave
    '0xEF68e7C694F40c8202821eDF525dE3782458639f',  //Loopring
    '0x708B63545467a9bCFB67aF92299102c650E34a0e',  //Vital Ethereum
    '0xf230b790e05390fc8295f4d3f60332c93bed42e2',  //Tronix
    '0xE4c67A5fEE1f040a048EE7Eb89eb29Aff45001a1'   //Betra coin
]

const walletAddress = "0xA145ac099E3d2e9781C9c848249E2e6b256b030D"

const ABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

export async function getTokenInfo() {
    let array = {}
    let dateTime = new Date()
    const key = `Balance of ${walletAddress} Time: ${dateTime}`
    array[key] = []
    for (let tokenAddress of tokenAddresses){
        const contract = new web3.eth.Contract(ABI, tokenAddress)
        const balance = await contract.methods.balanceOf(walletAddress).call()
        const formattedBalance = web3.utils.fromWei(balance, "ether")
        array[key].push(formattedBalance)
    }
    return array
}