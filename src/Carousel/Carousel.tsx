export const Carousel = (props: any) => {
    return (
        <>
            <img src={props.img} />
            <span>{props.text}</span>
        </>
    )
}