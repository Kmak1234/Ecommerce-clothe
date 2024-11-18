
export const ShopList = (props: any) => {
  return (
    <>
        <div className="pl-2">
                <img src={props.img} />
                <span>{props.text}</span>
                <br />
                <span>{props.price}</span>
                <img className="h-6 w-6 absolute"  src={props.img2} />
        </div>
    </>
  )
}
