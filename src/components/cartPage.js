import { useSelector } from "react-redux"
import CartTableRow from "./cartTableRow"
import calculatePrice from "../functions/cacluatePrice"


export default function CartPage() {
    const selectedItems = useSelector(state => state.cart)
    
    const itemsList = []
    for (const item in selectedItems) {
        itemsList.push(<CartTableRow price={selectedItems[item].price} name={item} count={selectedItems[item].count}/>)
    }
    const totalPrice = calculatePrice(selectedItems)
    return (

        
            <div className="w-full py-3 px-3">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="w-1/2" scope="col">product name</th>
                            <th className="w-1/6" scope="col">price</th>
                            <th className="w-1/6" scope="col">count</th>
                            <th className="w-1/6" scope="col">total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemsList
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>
                                total price
                            </td>
                            <td>
                                {totalPrice} $
                            </td>
                        </tr>
                    </tfoot>
                </table>

            </div>

    )
}