import { useDispatch } from "react-redux"
import { addItem, removeItem } from "../cart/cartSlice"



export default function CartTableRow({name,count,price}){

    const dispatch = useDispatch()
    const data = {
        title: name,
        price: price
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{price} $</td>
            <td>
                <div className="flex justify-between w-min">
                    <button className="text-xl px-2  " onClick={() => dispatch(removeItem(data))}>
                        -
                    </button>
                    <p>
                        {count}
                    </p>
                    <button className="text-xl px-2 " onClick={() => dispatch(addItem(data))}>
                        +
                    </button>
                </div>
            </td>
            <td>{count*price} $</td>
        </tr>
    )

}