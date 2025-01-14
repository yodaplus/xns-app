import {
  getNetwork,
  getNetworkId,
  isReadOnly,
  getNetworkName
} from '@ensdomains/ui'
import { setup as setupENS } from '../apollo/mutations/ens'
import {
  isReadOnlyReactive,
  networkIdReactive,
  networkReactive,
  web3ProviderReactive,
  networkNameReactive
} from '../apollo/reactiveVars'
import WalletConnectProvider from '@walletconnect/web3-provider'

// const INFURA_ID =
//   window.location.host === "godomain.yodaplus.net"
//     ? "90f210707d3c450f847659dc9a3436ea"
//     : "58a380d3ecd545b2b5b3dad5d2b18bf0";

// const PORTIS_ID = "57e5d6ca-e408-4925-99c4-e7da3bdb8bf5";

let provider
const option = {
  network: 'mainnet', // optional
  cacheProvider: true, // optional
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          51: 'https://rpc-apothem.xinfin.yodaplus.net',
          50: 'https://rpc.xinfin.yodaplus.net'
        }
      },
      display: {
        description: 'Scan with a wallet to connect'
      }
    }
    // walletlink: {
    //   package: () => import('walletlink'),
    //   packageFactory: true,
    //   options: {
    //     appName: 'Xinfin name service',
    //     jsonRpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`
    //   }
    // },
    // mewconnect: {
    //   package: () => import('@myetherwallet/mewconnect-web-client'),
    //   packageFactory: true,
    //   options: {
    //     rpc: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    //     description: ''
    //   }
    // },
    // portis: {
    //   package: () => import('@portis/web3'),
    //   packageFactory: true,
    //   options: {
    //     id: PORTIS_ID
    //   }
    // },
    // torus: {
    //   package: () => import('@toruslabs/torus-embed'),
    //   packageFactory: true
    // }
  }
}

let web3Modal
export const connect = async () => {
  try {
    const Web3Modal = (await import('@ensdomains/web3modal')).default

    web3Modal = new Web3Modal(option)
    provider = await web3Modal.connect()

    await setupENS({
      customProvider: provider,
      reloadOnAccountsChange: false,
      enforceReload: true
    })
    return provider
  } catch (e) {
    if (e !== 'Modal closed by user') {
      throw e
    }
  }
}

export const disconnect = async function() {
  if (web3Modal) {
    await web3Modal.clearCachedProvider()
  }

  // Disconnect wallet connect provider
  if (provider && provider.disconnect) {
    provider.disconnect()
  }
  await setupENS({
    reloadOnAccountsChange: false,
    enforceReadOnly: true,
    enforceReload: false
  })

  isReadOnlyReactive(isReadOnly())
  web3ProviderReactive(null)
  networkIdReactive(await getNetworkId())
  networkReactive(await getNetwork())
  networkNameReactive(await getNetworkName())
}

export const setWeb3Modal = x => {
  web3Modal = x
}
