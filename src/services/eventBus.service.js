'use strict'

function createEventEmitter(defaultHandler = null) {
    const listenersMap = {}
    const defHandler = defaultHandler

    return {
        on(evName, listener) {
            listenersMap[evName] = (listenersMap[evName]) ? [...listenersMap[evName], listener] : [listener]
            return () => listenersMap[evName] = listenersMap[evName].filter(func => func !== listener)
        },
        emit(evName, payload){
            if(listenersMap[evName]) listenersMap[evName].forEach(listener => listener(payload))
            else if(defaultHandler) defaultHandler()
        }
    }
}

export const eventBus = createEventEmitter()

export function showSuccessMsg(txt) {
    eventBus.emit('user-msg', { txt, type: 'success' })
}

export function showErrorMsg(txt) {
    eventBus.emit('user-msg', { txt, type: 'error' })
}

window.ebs = eventBus










