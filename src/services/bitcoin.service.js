import axios from 'axios'

const MARKET_PRICES_KEY = 'marketPricesDB'
const AVG_BLOCK_SIZE_KEY = 'avgBlockSizeDB'

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

async function getRate(balance) {
  const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${balance}`)
  return res.data
}

async function getMarketPriceHistory() {
  const marketPrices = JSON.parse(localStorage.getItem(MARKET_PRICES_KEY))

  if (marketPrices && marketPrices.length) {
    // console.log('Market Price From Cache')
    return Promise.resolve(marketPrices)
  }

  try {
    const res = await axios.get(
      'https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true'
    )
    const { values } = res.data
    localStorage.setItem(MARKET_PRICES_KEY, JSON.stringify(values))
    return values
  } catch (err) {
    console.log('Had issues loading market prices history size:', err)
  }
}

async function getAvgBlockSize() {
  const avgBlockSize = JSON.parse(localStorage.getItem(AVG_BLOCK_SIZE_KEY))

  if (avgBlockSize && avgBlockSize.length) {
    // console.log('Transactions from cache')
    return Promise.resolve(avgBlockSize)
  }

  try {
    const res = await axios.get(
      'https://api.blockchain.info/charts/avg-block-size?timespan=1months&format=json&cors=true'
    )

    const { values } = res.data
    localStorage.setItem(AVG_BLOCK_SIZE_KEY, JSON.stringify(values))
    return values
  } catch (err) {
    console.log('Had issues loading average block size:', err)
  }
}
