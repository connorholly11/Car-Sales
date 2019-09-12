
export const BUY_ITEM = 'BUY_ITEM';
export const buy_itemAC = item => {
    return{
        type: BUY_ITEM, 
        payload: item
    }
}

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const remove_itemAC = item => {
    return{
        type: REMOVE_ITEM,
        payload: item
    }
}