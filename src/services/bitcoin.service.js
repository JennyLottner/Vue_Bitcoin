'use strict'

import axios from 'axios'
import { storageService } from './storage.service'

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
    const rate = storageService.loadFromStorage(RATE_KEY) || await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${balance}`)
    if (rate.data) storageService.saveToStorage(RATE_KEY, rate.data)
    return rate.data || rate
  } catch (err) {
    console.log(err)
  }
}

async function getMarketPriceHistory() {
  try {
    let marketPrices = storageService.loadFromStorage(MARKET_PRICES_KEY) || await axios.get('https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true')
    if (marketPrices.data) {
      let marketPricesNew = { dates: [], prices: [] }
      marketPrices.data.values.forEach(val => {
        marketPricesNew.dates.push(new Date(val.x * 1000).toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric' }))
        marketPricesNew.prices.push(val.y)
      })
      marketPrices = marketPricesNew
      storageService.saveToStorage(MARKET_PRICES_KEY, marketPrices)
    }
    return marketPrices
  } catch (err) {
    console.log(err)
  }
}

async function getAvgBlockSize() {
  try {
    let avgBlockSize = storageService.loadFromStorage(AVG_BLOCK_SIZE_KEY) || await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=1months&format=json&cors=true')
    if (avgBlockSize.data) {
      let avgBlockSizeNew = { dates: [], prices: [] }
      avgBlockSize = avgBlockSize.data.values.forEach(val => {
        avgBlockSizeNew.dates.push(new Date(val.x * 1000).toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric' }))
        avgBlockSizeNew.prices.push(val.y)
      })
      avgBlockSize = avgBlockSizeNew
      storageService.saveToStorage(AVG_BLOCK_SIZE_KEY, avgBlockSize)
    }
    return avgBlockSize
  } catch (err) {
    console.log(err)
  }
}
