import React from 'react';
export default function App(){
  return (
    <main>
      <header classname="header">
        <a href="#" classname="logo"><img src="/img/logo.png" alt=""/></a>
        <nav classname="nav-bar">
           <a href="#">Dermal Fillers</a>
           <a href="#">Mesotherapy</a>
           <a href="#">Deals</a>
           <a href="#">Brand</a>
           <a href="#">Orthepedisc</a>
           <a href="#">Contact US</a>
        </nav>
        <div classname="right">
           <a href="#"><i classname='bx bx-search'></i></a>
           <a href="#"><i classname='bx bx-basket'></i></a>
           <a href="#"><i classname='bx bx-user'></i></a>
        </div>
     </header>
     <section classname="home">
        <div classname="home-contact">
           <h1 classname="text-white">BEST DERMAL FILLERS</h1>
           <h1 classname="text-transparent">GREAT PRICES</h1>
           <p classname="content">take cognisance of any email or message purportedly sent by any employee or officer of the GSRTC from an Id </p>
           <a href="#" classname="home-btn">See More</a>
           <div classname="social">
              <i classname='bx bx-current-location'></i>
              <p>take cognisance of any email<br/> or message purportedly sent by any employee or office</p>
              <div classname="icon">
                 <i classname='bx bx-message-rounded-dots'></i>
                 <i classname='bx bxl-whatsapp' ></i>
              </div>
           </div>
        </div>
        <div classname="home-img">
           <div classname="product-img">
              <h2>LOREM IPSUM</h2>
              <img src="/img/image_2.png" alt="not found"/>
           </div>
           <a href="#" classname="home-btn">See More</a>
        </div>
     </section>
  {//<!------------------------------CATEGORIS SECTION----------------------------------->
  }
  
     <section classname="categories">
        <h1 classname="head">CATEGORIS</h1>
        <div classname="categories-box">
           <div classname="item1">
              <h1>DERMAL FILLERS</h1>
              <img src="/img/cat_image_1.png" alt="not found"/>
              <a href="#" classname="btn">See More</a>
           </div>
           <div classname="item2">
              <h1>MESOTHERAPY</h1>
              <img src="/img/cat_image_2.png" alt="not found"/>
              <a href="#" classname="btn">See More</a>
           </div>
           <div classname="item3">
              <h1>PORTHOPEDICS</h1>
              <img src="/img/cat_image_3.png" alt="not found"/>
              <a href="#" classname="btn">See More</a>
           </div>   
        </div>
        <div classname="bg_cut"></div>
     </section>
     
     
    {//<!-- ---- --- ---- ---BEAT SALLER--- ---- --- ---- --- -->
      }
    <section classname="bestsaller">
        <h1 classname="head">BEST SALLERS</h1>
        <div classname="allitem">
           <div classname="item1">
              <div classname="img-box">
                 <img src="/img/cat_image_2.png" alt=""/>
              </div>
              <div classname="propaty">
                 <h3>PROFHILO H + L</h3>
                 <p>profhilo</p>
                 <div classname="star-rate">
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                 </div>
                 <h1 classname="price">$90.00</h1>
                 <a href="#" classname="btn">Show Deals</a>
              </div>
           </div>
           <div classname="item2">
              <div classname="img-box">
                 <img src="/img/cat_image_1.png" alt=""/>
              </div>
              <div classname="propaty">
                 <h3>PROFHILO H + L</h3>
                 <p>profhilo</p>
                 <div classname="star-rate">
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                 </div>
                 <h1 classname="price">$90.00</h1>
                 <a href="#" classname="btn">Show Deals</a>
              </div>
           </div>
           <div classname="item3">
              <div classname="img-box">
                 <img src="/img/cat_image_2.png" alt=""/>
              </div>
              <div classname="propaty">
                 <h3>PROFHILO H + L</h3>
                 <p>profhilo</p>
                 <div classname="star-rate">
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                 </div>
                 <h1 classname="price">$90.00</h1>
                 <a href="#" classname="btn">Show Deals</a>
              </div>
           </div>
           <div classname="item4">
              <div classname="img-box">
                 <img src="/img/cat_image_1.png" alt=""/>
              </div>
              <div classname="propaty">
                 <h3>PROFHILO H + L</h3>
                 <p>profhilo</p>
                 <div classname="star-rate">
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                    <i classname='bx bxs-star'></i>
                 </div>
                 <h1 classname="price">$90.00</h1>
                 <a href="#" classname="btn">Show Deals</a>
              </div>
           </div>
        </div>
     </section>
    </main>
    );
}