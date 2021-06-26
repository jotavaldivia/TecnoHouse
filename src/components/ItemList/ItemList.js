import React, { useState } from 'react'
import Item from '../Item/Item.js'
function ItemList({ prod }) {
    {
        //         prod.map((item,index) => {
        // console.log(item)
        // })
    }
    return (
        <>
            <ul>
                {
                    prod.map((item, index) => {
                        return(
                           <Item prod={item} index={index}/>
                        )
                       
                    })
                }
            </ul>
        </>
    )
}

export default ItemList
