
export const BUY_ITEM = 'BUY_ITEM';
export const BUY_ITEMAC = item => {
    return{
        type: BUY_ITEM, 
        payload: item
    }
}