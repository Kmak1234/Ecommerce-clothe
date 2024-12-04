import { Header } from "./components/Header/Header"
import { Main } from "./Main/Main"
import { ShopList } from "./components/ShopList/ShopList"
import Title1 from "./components/Titles/Title1"

export default function App(){
  return(
    <>
      <div className="border-zinc-600	">
        <Header />
        <Main />
        <Title1 />
        <div className="flex flex-row">
          <ShopList 
            img="../src/assets/Bag/Bag1.png" 
            text="Classic easy Zipper Tote"
            price="$156"
            img2 = "../src/assets/Plus/plus.png"
          />
          <ShopList 
            img="../src/assets/Bag/Bag2.png" 
            text="Concertina Phone Bag"
            price="$124"
            img2 = "../src/assets/Plus/plus.png"
          />
          <ShopList 
            img="../src/assets/Bag/Bag3.png"
            text="Wool Cashmere Sweater Coat"
            price="$398"
            img2 = "../src/assets/Plus/plus.png"
          />
          <ShopList 
            img="../src/assets/Bag/Bag4.png"
            text="Single Origin Cashmere Beanie"
            price="$248"
            img2 = "../src/assets/Plus/plus.png"
          />
          <ShopList 
            img="../src/assets/Bag/Bag5.png" 
            text="Alpaca Wool Cropped Cardigan"
            price="$158"
            img2 = "../src/assets/Plus/plus.png"
          />
          <ShopList 
            img="../src/assets/Bag/Bag1.png" 
            text="Classic easy Zipper Tote"
            price="$812"
            img2 = "../src/assets/Plus/plus.png"
          />
          <ShopList 
            img="../src/assets/Bag/Bag2.png" 
            text="Concertina Phone Bag"
            price="$248"
            img2 = "../src/assets/Plus/plus.png"
          />
        </div>
      </div>
    </>
  )
}