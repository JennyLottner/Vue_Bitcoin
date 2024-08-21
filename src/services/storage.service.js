'use strict'

import { utilService } from "./util.service"

export const storageService = {
    saveToStorage,
    loadFromStorage,
    query,
    get,
    post,
    put,
    remove,
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null)
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}

async function query(entityType) {
    var entities = loadFromStorage(entityType) || []
    return new Promise(entities)
}

async function get(entityType, entityId) {
    const entities = await query(entityType)
    const entity = entities.find(entity => entity._id === entityId)
    if (!entity) throw new Error(`Get failed, cannot find ${entityType} with id: ${entityId}.`)
    return entity
}

async function post(entityType, newEntity) {
    const entities = await query(entityType)
    newEntity._id = utilService.makeId()
    entities.push(newEntity)
    saveToStorage(entityType, entities)
    return Promise.resolve(newEntity)
}

async function put(entityType, updatedEntity) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    if (idx < 0) throw new Error(`Update failed, cannot find ${entityType} with id: ${entityId}.`)
    entities[idx] = updatedEntity
    saveToStorage(entityType, entities)
    return Promise.resolve(updatedEntity)
}

async function remove(entityType, entityId) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === entityId)
    if (idx < 0) throw new Error(`Removal failed, cannot find ${entityType} with id: ${entityId}.`)
    entities.splice(idx, 1)
    saveToStorage(entityType, entities)
    return Promise.resolve()
}