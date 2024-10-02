import { Header } from "./components/Header/Header"
import { Main } from "./Main/Main"
import { ShopList } from "./components/ShopList/ShopList"


export default function App(){
  return(
    <>
    <div className="border-zinc-600	">
      <Header />
      <Main />
      <ShopList 
        img="../src/assets/Bag/Bag1.png" 
        text="Classic easy Zipper Tote"
        price="$298 "
          />
      <ShopList 
      img="../src/assets/Bag/Bag2.png" 
      text="Concertina Phone Bag"
      price="$248"
      
      />
      <ShopList 
        img="../src/assets/Bag/Bag3.png"
        text="Wool Cashmere Sweater Coat"
        price="$398"
        />
      <ShopList 
        img="../src/assets/Bag/Bag4.png"
        text="Single Origin Cashmere Beanie"
        price="$98"
        />
      <ShopList 
        img="../src/assets/Bag/Bag5.png" 
        text="Alpaca Wool Cropped Cardigan"
        price="$248"
        />
    </div>
    </>
  )
}