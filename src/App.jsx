import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import "./App.css"
import logo from './airpods.jpg'
import logos from './iphone-image3.jpg'
import macimage from './mac-laptop1.jpg'
import image1 from './image1 (1).png'
import image2 from './image1 (2).png'
import image3 from './image1 (3).png'
import image4 from './image1 (4).png'
function APP() {
  return (
  <>
  {/* navbar */}
  
  <div className=" bg-sky-100 h-16 my-1 sticky top-0 z-40 ">
  <section className="flex justify-between gap-4 absolute top-0 left-1/5 ">
     <div  className="text-2xl p-3 m-3 ">< FaApple /></div>
      <div className="flex gap-4 justify-between p-3 m-3">
      <p className="cursor-pointer hover:underline">Store</p>
      <p  className="cursor-pointer hover:underline">Mac</p>
      <p className="cursor-pointer hover:underline">iPad</p>
      <p className="cursor-pointer hover:underline">iPhone</p>
      <p className="cursor-pointer hover:underline">Watch</p>
      <p className="cursor-pointer hover:underline">AirPods</p>
      <p className="cursor-pointer hover:underline">TV & Home</p>
      <p className="cursor-pointer hover:underline">Entertainment</p>
      <p className="cursor-pointer hover:underline">Accessories</p>
      <p className="cursor-pointer hover:underline">Support</p>
    </div>
    <div className="flex p-3 m-3 gap-4 text-xl"><p><CiSearch /></p>
         <p><IoBagOutline /></p></div>

     </section>
  </div>
  

     {/* offer banner */

     <p className="p-4 m-3 text-center mt-1 pt-4">Get upto 12 months of No Cost EMI plus up to Rs.8000.<a src="apple.com">Shop</a> </p>

      }

      {/* image- section1 */}
      <div className="relative">
     <img className=" w-screen h-[600px] object-cover" src={logo}></img>
     <div className="absolute top-10 text-center justify-center text-white left-[40%]">
     <p className="bg-blue-500 text-4xl border-black rounded-4xl py-3 px-4 w-70 font-bold m-3">Buy Mac or iPad for college</p>
     <p  className="bg-blue-500 text-xl border-black rounded-4xl py-3 px-4 w-70 font-bold m-3 ">with education savings</p>
     <p  className="bg-blue-500 text-4xl border-black rounded-4xl py-3 px-4 w-70 font-bold m-3">Choose AirPods or an eligible accessory</p>
     <button className="text-blue-600 border rounded-full py-3 px-4 bg-white"> Shop </button>
     </div>
     </div>

    {/* image- section2 */}
    <div className="relative" >
    <div className="my-3">
    <img className="w-screen h-[600px]" src={logos}></img>
    <div className="absolute top-75 left-[35%] text-center ">
    <p className="text-white text-6xl font-bold m-3 p-3">iPhone</p>
    <p className="text-white text-3xl  m-3 p-3">Meet the iPhone 16 family.</p>
    <button className="bg-blue-500 hover:bg-blue-600 text-xl text-black px-4 py-2 rounded mx-3">Learn more</button>
    <button className=" text-black px-4 py-2 border-blue-800 border-1 rounded mx-3" >Shop iPhone</button>
    <p className="text-sky-300 text-3xl  m-3 p-3 "> <i>Build for Apple Intelligence</i></p>
    </div>
    </div>
    </div>

    {/* image section 3 */}
    <div className="relative">
     <img className="w-screen h-[600px]" src={macimage} alt="image3" />
      <div className="absolute top-10 left-[40%] text-center ">
     <p className="text-6xl font-bold mt-5 pt-3">MacBook Air</p>
     <p className="text-3xl text-white  m-3">Sky Blue Colour</p>
     <p className="text-3xl text-white m-3">Sky high performance with M4</p>
     <button className="m-3 ">Learn more</button>
     <button className="m-3">Buy</button>
    </div>
    <p className="text-black text-3xl absolute bottom-6 left-[37%] text-center font-bold "> <i>Build for Apple Intelligence</i></p>
     
    </div>
    {/* image section4 */}
    <div className="flex my-3">
      <img className="w-1/2 m-2" src={image1} alt="" />
      <img className="w-1/2 m-2" src={image2} alt="" />
    </div>
     {/* image section5 */}
    <div className="flex my-3">
      <img className="w-1/2 m-2" src={image3} alt="" />
      <img className="w-1/2 m-2" src={image4} alt="" />
    </div>

    {/* para */}
    <div className=" bg-sky-50">
      <p className="mx-24 text-[13px] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci expedita iste autem nihil inventore sapiente, molestiae blanditiis eius nam, quibusdam officiis labore tempora ut quis ab in. Vero sit dolorem officia magnam sint odio atque dolore obcaecati nisi hic qui in, doloremque consectetur optio doloribus voluptatum ipsam, vel, delectus voluptatem? Nobis iste sequi at fugiat eius laborum tempore, similique nihil, quam aliquam corporis nostrum? At mollitia asperiores quasi ipsa maxime saepe natus ipsam porro magnam cumque. Delectus deserunt, vel officia, consequuntur rem eum necessitatibus odio sit, eaque autem aliquid. Eligendi necessitatibus eius, delectus asperiores molestias quidem dolor ullam ea aspernatur veniam suscipit optio officia temporibus, molestiae eveniet corrupti laborum aperiam distinctio soluta porro voluptas ex nostrum dolorum! Reiciendis, repudiandae, non nemo, aperiam doloremque nam fugit id accusamus est voluptate architecto provident deleniti distinctio maiores commodi officiis? Provident dolor rerum doloremque nihil aspernatur? Expedita, corrupti inventore? Totam voluptatibus officiis aperiam voluptatum doloremque odit, perspiciatis esse quisquam veritatis praesentium quibusdam alias in blanditiis neque, et repudiandae recusandae, voluptas odio expedita! Inventore quidem totam facilis doloribus! Tempora odit distinctio qui soluta exercitationem debitis natus libero magnam quaerat adipisci amet, voluptate nesciunt id eius at aspernatur quidem iusto maiores molestiae molestias pariatur! A vel vero qui. Corrupti odit veniam quo alias iste, aliquam ducimus nemo autem placeat asperiores, repellat dicta distinctio quasi optio quia! Ratione quidem unde dolores, dicta adipisci officiis, quia molestiae laborum repellendus fugiat neque. Minima veritatis dignissimos labore ab nostrum, hic recusandae vero corrupti tenetur, a corporis quia voluptate cupiditate veniam dolor non. Perferendis repudiandae ipsum quam aspernatur sapiente obcaecati cupiditate voluptates, minus beatae, suscipit sunt! Natus, quasi rem? Cupiditate, laborum libero. Sit similique aliquam sed incidunt laudantium? Aperiam veritatis a doloremque minima quasi sapiente unde ad maiores nam suscipit mollitia sint sequi, repellendus, consectetur maxime possimus. Nulla enim facere culpa assumenda, iusto ipsum facilis eligendi molestias modi reprehenderit suscipit nisi soluta aliquid! Saepe eius dicta debitis eaque obcaecati dolor nam sunt quibusdam molestias, deserunt voluptatibus labore dolorum quae ipsum esse animi in praesentium aut blanditiis voluptatum laborum possimus dolorem illum sequi? Enim soluta molestias voluptatem sit neque hic qui quidem ex repellendus vero delectus, quia ad aperiam, beatae nobis consequatur sunt? Obcaecati quod earum mollitia rerum aut adipisci cum, sequi aliquam doloribus, unde ipsam quae excepturi dicta, quos iste ea vero nesciunt. Perferendis magnam maiores doloremque harum iure, quas incidunt error nihil odio id, reprehenderit eligendi recusandae dolor iste nulla nobis suscipit eum esse quaerat neque beatae quibusdam mollitia sed. Eligendi excepturi vero atque, expedita nemo odio aliquid commodi esse. Recusandae, iste. Molestias ratione labore temporibus! Aperiam possimus delectus omnis dolor beatae suscipit harum obcaecati reiciendis nisi libero neque cum, aut laudantium blanditiis culpa impedit quidem eveniet dignissimos assumenda illo? Ab id obcaecati dolores? Obcaecati iure quidem cum? Voluptatem aut, impedit quasi, voluptatum facilis culpa saepe possimus accusantium natus ducimus nemo omnis ex debitis laudantium amet illo voluptate ratione esse animi dolores, explicabo ullam dignissimos recusandae? Debitis nobis, aut blanditiis, quo inventore minus quasi aliquam amet maiores magni facilis!</p>

    </div>

    {/* footer */}

    <section className="flex justify-around mt-5 border-t-1 bg-sky-50">
      <div>
        <h4 className=" font-bold m-3 px-3">Shop and Learn</h4>
        <ul className="mx-3 px-3">
          <li className="mt-2">Store</li>
          <li className="mt-2">Mac</li>
          <li className="mt-2">iPad</li>
          <li className="mt-2">iPhone</li>
          <li className="mt-2">Watch</li>
          <li className="mt-2">AirPods</li>
          <li className="mt-2">TV & Home</li>
          <li className="mt-2">AirTags</li>
          <li className="mt-2">Accessories</li>
          <li className="mt-2">Gift Cards</li>
        </ul>
        <h3 className="font-bold m-3 px-3">Apple</h3>
        <p className="my-2 mx-3 px-3">Wallet</p>
      </div>
      <div>
        <h3 className="font-bold mt-2">Account</h3>
        <p className="mt-2">Manage your Apple accont</p>
        <p className="mt-2">Apple Store Account</p>
        <p className="mt-2">iCloud.com</p>
        <h3 className="font-bold mt-2">Entertainment</h3>
        <p className="mt-2">Apple One</p>
        <p className="mt-2">Apple TV+</p>
        <p className="mt-2">Apple Music</p>
        <p className="mt-2">Apple Arcade</p>
        <p className="mt-2">Apple Podcasts</p>
        <p className="my-2">Apple Books</p>
         <>App Store</>
      </div>
      <div>
        <h3 className="font-bold mt-2">Apple Store</h3>
        <p className="mt-2">Find a Store</p>
        <p className="mt-2">Genius Bar</p>
        <p className="mt-2">Today a Apple</p>
        <p className="mt-2">Group Reservations</p>
        <p className="mt-2">Apple Camp</p>
        <p className="mt-2">Apple Trade in</p>
        <p className="mt-2">Ways to Buy</p>
        <p className="mt-2">Recycling Programme</p>
        <p className="mt-2">Order Status</p>
        <p  className="mt-2">Shopping Help</p>
      </div>
      <div>
        <h3 className="font-bold mt-2">For Business</h3>
        <p className="mt-2">Apple and Business</p>
        <p className="mt-2">Shop for Business</p>
        <h3 className="font-bold mt-2">For Education</h3>
        <p className="mt-2">Apple and Education</p>
        <p className="mt-2">Shop for Education</p>
        <p className="mt-2">Shop for University</p>
        <h3 className="font-bold">For Healthcare</h3>
        <p className="mt-2">Apple in Healthcare</p>
        <p className="mt-2">Mac in Healthcare</p>
        <p className="mt-2">Health on Apple Watch</p>
      </div>
      <div>
        <h3 className="font-bold mt-2">Apple values</h3>
        <p className="mt-2">Accessibility</p>
        <p className="mt-2">Education</p>
        <p className="mt-2">Environment</p>
        <p className="mt-2">Privacy</p>
        <p className="mt-2">Supply Chain Innovation</p>
        <h3 className="font-bold mt-2">About Apple</h3>
        <p className="mt-2">Newsroom</p>
        <p className="mt-2">Apple Leadership</p>
        <p className="mt-2">Career Opportunities</p>
        <p className="mt-2">Investors</p>
        <p className="mt-2">Ethics and Compliance</p>
        <p className="mt-2">Events</p>
        <p className="mt-2">Contact Apple</p>
      </div>
    </section>
    </>

  )
  
}

export default APP;