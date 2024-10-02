
export const ShopList = (props: any) => {
  return (
    <>
        <div>
            <div>
                What to wear now
            </div>
            <div>
                <img src={props.img} />
                <span>{props.text}</span>
                <br />
                <span>{props.price}</span>
            </div>
        </div>
    </>
  )
}
