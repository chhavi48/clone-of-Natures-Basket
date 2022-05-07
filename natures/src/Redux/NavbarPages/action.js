export const WINE_BEER='WINE_BEER';
export const HOVER_CHECK='HOVER_CHECK';

// action creator

export const wineandbeerLinks=()=>(
    {type:WINE_BEER}
)

export const hovercheck=(payload)=>({
    type:HOVER_CHECK,
    payload
})