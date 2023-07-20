import Web3 from 'web3'; // 引入Web3
import { AbiItem } from 'web3-utils';

// Arbitrum One网络ID
const Arbitrum_CHAIN_ID = '0xa4b1';

// Arbitrum One网络ID
const Arbitrum_CHAIN_ID_DECIMAL = '42161';

// 合约地址
const ContractAddress = '0xf26D9Fe2B55D1243C077020bc2bba0EF58513529';

// ERC20合约ABI（仅包含transfer函数）
const erc20Abi: AbiItem[] = [
    {
        "inputs": [],
        "name": "activateIDO",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "name": "buyIDO",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "deactivateIDO",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawETH",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawIDOAllocation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isIDOActive",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

async function connectWallet() { // 连接钱包
    const { ethereum } = window; // 获取window.ethereum

    if (!ethereum) { // 检查MetaMask是否已安装
        console.log('请安装MetaMask！') // 打印日志
        return;
    }

    const web3 = new Web3(ethereum); // 初始化Web3
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); // 获取账户
    const chainId = await ethereum.request({ method: 'eth_chainId' }); // 获取网络ID
    const address = accounts[0]; // 获取账户地址
    let isIDOActivess
    // 转账
    const transfer = async (shares: any) => {
        if (!window.ethereum) {
            console.error('请先安装MetaMask插件');
            return;
        }

        try {
            const Contract = new web3.eth.Contract(erc20Abi, ContractAddress);
            const isIDOActive = await Contract.methods.isIDOActive().call();
            console.log('isIDOActive:', isIDOActive)
            if (isIDOActive) {

                // 设置IDO份数
                const amount = +web3.utils.toWei('0.03', 'ether') * shares;
                const gasPrice = await web3.eth.getGasPrice();
                const gasLimit = 200000;


                // 使用buyIDO方法调用合约
                const transaction = await Contract.methods.buyIDO(shares)
                    .send({ from: address, value: amount, gasPrice: gasPrice, gas: gasLimit })
                    .on('transactionHash', function (hash: any) {
                        console.log('交易哈希:', hash);
                    })
                    .on('confirmation', function (confirmationNumber: any, receipt: any) {
                        console.log('确认编号:', confirmationNumber);
                        console.log('收据:', receipt);
                    })
                    .on('receipt', function (receipt: any) {
                        console.log('转账成功', receipt);
                    })
                    .on('error', function (error: any, receipt: any) {
                        console.error('转账失败', error);
                    });
            } else {
                console.log('IDO未激活');
            }
        } catch (error) {
            console.error('转账失败', error);
        }
    };

    const changeIDO = async (show: boolean) => {
        if (!window.ethereum) {
            console.error('请先安装MetaMask插件');
        }
        try {
            const Contract = new web3.eth.Contract(erc20Abi, ContractAddress);
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = 200000;
            if (show) {
                await Contract.methods.deactivateIDO().send({ from: address, gasPrice: gasPrice, gas: gasLimit });
                return await Contract.methods.isIDOActive().call();
            } else {
                await Contract.methods.activateIDO().send({ from: address, gasPrice: gasPrice, gas: gasLimit });
                return await Contract.methods.isIDOActive().call();
            }
        } catch (error) {
            console.error('转账失败', error);
        }
    }

    if (chainId !== Arbitrum_CHAIN_ID) { // 检查当前网络是否为Arbitrum One网络
        const Contract = new web3.eth.Contract(erc20Abi, ContractAddress);
        isIDOActivess = await Contract.methods.isIDOActive().call();
        try { // 切换到Arbitrum One网络
            await ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: Arbitrum_CHAIN_ID }] }); // 切换到Arbitrum One网络
        } catch (switchError: any) { // 捕获错误
            if (switchError.code === 4902) { // 如果错误码为4902，则尝试添加Arbitrum One网络
                try {
                    const res = await ethereum.request({
                        method: 'wallet_addEthereumChain', // 添加Arbitrum One网络
                        params: [
                            {
                                chainId: Arbitrum_CHAIN_ID, // Arbitrum One网络ID
                                chainName: 'Arbitrum One', // Arbitrum One网络名称
                                nativeCurrency: {
                                    name: 'Ethereum', // ETH代币名称
                                    symbol: 'ETH', // ETH代币符号
                                    decimals: 18, // ETH代币精度
                                },
                                rpcUrls: [
                                    'https://arb1.arbitrum.io/rpc'
                                ], // Arbitrum One网络RPC节点
                                blockExplorerUrls: [
                                    'https://arbiscan.io/'
                                ], // Arbitrum One网络区块浏览器
                            },
                        ],
                    });
                    console.log('res:', res)
                    console.log('Arbitrum One Network added');
                } catch (addError) {
                    alert("添加网络失败! 为你跳转到chainlist.org, 请手动添加Arbitrum One网络") // 添加Arbitrum One网络失败
                    window.open('https://chainlist.org/chain/42161', '_blank'); // 打开Arbitrum One网络添加页面
                    console.error('无法添加Arbitrum One网络:', addError); // 打印日志
                }
            } else {
                console.error('无法切换到Arbitrum One网络:', switchError); // 打印日志
            }
        }
    } else {
        const Contract = new web3.eth.Contract(erc20Abi, ContractAddress);
        isIDOActivess = await Contract.methods.isIDOActive().call();
    }
    let balance = 0;
    let balanceChain = "0";
    try {
        const tokenContract = new web3.eth.Contract(erc20Abi, ContractAddress); // 初始化USDT合约
        balance = await tokenContract.methods.balanceOf(address).call()  // 获取账户余额
    } catch (e) {

    }
    try {
        // let balanceSet = await web3.eth.getBalance(address)// 获取账户余额
        balanceChain = await web3.eth.getBalance(address)// 获取账户余额
        // balanceChain = (+balanceSet / (10 ** 18)).toString()
        // balanceChain = convertEtherUnits(parseInt(balanceChainInt), EtherUnit.WEI, EtherUnit.ETHER)
    } catch (e) {

    }

    return { web3, address, balance, balanceChain, transfer, isIDOActivess, changeIDO }; // 返回web3、账户地址、账户余额、转账函数
}

export default connectWallet;
