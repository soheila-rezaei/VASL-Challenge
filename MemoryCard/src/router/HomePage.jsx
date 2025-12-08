//مقادیر ثایتی که ایجاد کردم در فایل datainfo با نام items 
import items from "../constant/dataInfo";
//فایل card من که قرار بازی اصلی رو نمایش بده
import Game from "./Game";
function HomePage(){

       console.log(items)
    return(
       <div>
        {
            items.map((data)=>(<Game  key={data.id} data={data}/>))
        }
       </div>
    )
}
export default HomePage;

