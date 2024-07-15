import axios from 'axios'
import { utilService } from './util.service.js'

const RATE_KEY = 'rateDB'
const MARKET_PRICES_KEY = 'marketPricesDB'
const AVG_BLOCK_SIZE_KEY = 'avgBlockSizeDB'

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

async function getRate(balance) {
  try {
    const rate = utilService.loadFromStorage(RATE_KEY) || await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${balance}`)
    if (rate.data) utilService.saveToStorage(RATE_KEY, rate.data)
    return rate.data || rate
  } catch (err) {
    console.log(err)
  }
}

async function getMarketPriceHistory() {
  try {
    let marketPrices = utilService.loadFromStorage(MARKET_PRICES_KEY) || await axios.get('https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true')
    if (marketPrices.data) {
      marketPrices = marketPrices.data.values.map(val => { return {
            date: new Date(val.x * 1000).toLocaleDateString("en-US"),
            price: val.y
        }})
      utilService.saveToStorage(MARKET_PRICES_KEY, marketPrices)
    }
    return marketPrices
  } catch (err) {
     console.log(err)
   }
}

async function getAvgBlockSize() {
    try {
        let avgBlockSize = utilService.loadFromStorage(AVG_BLOCK_SIZE_KEY) || await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=1months&format=json&cors=true')
        if (avgBlockSize.data) {
          avgBlockSize = avgBlockSize.data.values
          utilService.saveToStorage(AVG_BLOCK_SIZE_KEY, avgBlockSize)
        }
        return avgBlockSize.data
    } catch (err) {
        console.log(err)
    }
}
