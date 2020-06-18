import React from 'react'

function Items(props) {
    const items = props.items;
    const listOfItems = items.map(item => 
        {
            return <div className = "list" key = {item.key}>
                <p><input type="text" id = {item.key} value = {item.text}
                onChange = {
                    (i) => {
                        props.changeItemValue(i.target.value, item.key)
                    }
                }
                ></input></p>
                <span><button type = "delete" onClick = {
                    () => props.deleteItem(item.key)
                }>Delete</button></span>
            </div>
        })
    return(
        <h3>{listOfItems}</h3>
    )
}

export default Items;