export default function ItemDetail(props) {
    return (
        <div className='fondo2 cursor-pointer w-56 h-60 rounded-lg relative border'>
            <div>{props.item.description}</div>
            <div>{props.item.price}</div>
            <div>{props.item.pictureUrl}</div>
        </div>
    )
}