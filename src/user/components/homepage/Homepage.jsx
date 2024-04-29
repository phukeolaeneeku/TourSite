import "./css/homepage.css";
import Header from "../header/Header";
import Menu from "../header/Menu"
import patusai from "../../../img/patusai.jpg";
import thadluang from "../../../img/thadluang.jpg";
import motorcycle from "../../../img/motorcycle.jpg";
import luangphabang from "../../../img/luangphabang.jpg";
import vangvieng from "../../../img/vangvieng.gif";
import vangvieng2 from "../../../img/vangvieng2.jpg";
import vangvieng3 from "../../../img/vangvieng3.jpg";
import vangvieng4 from "../../../img/vangvieng4.jpg";
import vangvieng6 from "../../../img/vangvieng6.jpg";
import hotel4 from "../../../img/hotel4.jpg";
import hotel2 from "../../../img/hotel2.jpg";
import hotel3 from "../../../img/hotel3.jpg";
import sim from "../../../img/sim.jpg";
import patusai2 from "../../../img/patusai.jpg";
import vangvieng5 from "../../../img/vangvieng5.jpg";
import recommended from "../../../img/recommended.jpg";
import recommended2 from "../../../img/recommended2.jpg";
import recommended3 from "../../../img/recommended3.jpg";
import resort from "../../../img/resort.jpg";
import resort2 from "../../../img/resort2.jpg";
import resort3 from "../../../img/resort3.jpg";
import { Link } from "react-router-dom";
import { SiGooglemaps } from "react-icons/si";


const Homepage = () => {
  return (
    <div>
      <Header />
      <Menu id="menu_barv"/>
      <section id="container_product">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="span_Styles"></span>Laos Play Category Best
          </h1>
        </div>
        <div className="contentImageProducts1">
          <div className="group_itemBox">
            <Link to="/details" className="img">
              <img src={patusai} alt="img" />
            </Link>
            <div className="txtOFproduct">
              <h4>Vientiane Airport Pickup Service</h4>
              <p>
                We will conveniently transport you from the airport to your hotel.
              </p>
              <div className="price">
                <p className="price_num">$10</p>
                <p> ￦15,000 </p>
              </div>
              <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
            </div>
          </div>
          <div className="group_itemBox">
            <Link to="/details" className="img">
              <img src={patusai} alt="img" />
            </Link>
            <div className="txtOFproduct">
              <h4>Vientiane Airport Pickup Service</h4>
              <p>
                We will conveniently transport you from the airport to your hotel.
              </p>
              <div className="price">
                <p className="price_num">$10</p>
                <p> ￦15,000 </p>
              </div>
              <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
            </div>
          </div>
         
          <div className="group_itemBox">
            <div className="img">
              <img src={thadluang} alt="img" />
            </div>
            <div className="txtOFproduct">
              <h4> Vientiane City Tour </h4>
              <p>You can travel around Vientiane comfortably.</p>
              <div className="price">
                <p className="price_num">$10</p>
                <p> ￦15,000 </p>
              </div>
              <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
            </div>
          </div>
          <div className="group_itemBox">
            <div className="img">
              <img src={motorcycle} alt="img" />
            </div>
            <div className="txtOFproduct">
              <h4>Buggy Tour Vang Vieng</h4>
              <p>Take a buggy ride around Vang Vieng</p>
              <div className="price">
                <p className="price_num">$10</p>
                <p> ￦15,000 </p>
              </div>
              <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
            </div>
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>Super Special Recommended
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={luangphabang} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Kuang Si Falls Private Pickup Service_Luang Prabang</h4>
                <p>
                  We will take you to Kuang Si Falls safely and comfortably.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4> Hot air balloon tour</h4>
                <p>
                  We will make good memories in the beautiful Vang Vieng sky.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng2} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>One-day full package (kayak & zipline)_Vang Vieng</h4>
                <p>
                  One-day pack that you can enjoy all day in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>Activity Recommended
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng3} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Kayak Caving & Swimming_Vang Vieng</h4>
                <p>
                  A unique experience that includes kayaking and cave tubing.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng4} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4> Semi pack (kayak & blue lagoon)_Vang Vieng</h4>
                <p>
                  Enjoy kayaking and swim in the Blue Lagoon!
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng6} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4> Vang Vieng Paramotor Tour</h4>
                <p>
                  Fly over Vang Vieng and see its beauty!
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>Hotel Recommended
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={hotel4} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Amari Hotel Vang Vieng</h4>
                <p>
                  Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={hotel2} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Indigo House Hotel</h4>
                <p>
                Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={hotel3} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Silver Naga Hotel</h4>
                <p>
                  Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>Recommended products for sale/rental
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={sim} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Amari Hotel Vang Vieng</h4>
                <p>
                  Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng5} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Indigo House Hotel</h4>
                <p>
                Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={patusai2} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Silver Naga Hotel</h4>
                <p>
                  Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>Laos Coupon Recommended
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={recommended} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>wellness spa</h4>
                <p>
                  Wellness spa to truly relax your body
                </p>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={recommended2} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>belgian beer house</h4>
                <p>
                  Enjoy a cold Belgian beer!
                </p>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={recommended3} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Vang Vieng First Massage</h4>
                <p>
                  Best massage in Vang Vieng
                </p>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>New Recommended
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={resort} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>My Dream Boutique Resort</h4>
                <p>
                  My Dream Boutique Resort
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={resort2} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Vientiane Vang Vieng private car service</h4>
                <p>
                We will take you comfortably between Vientiane and Vang Vieng.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={resort3} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>The Beer House</h4>
                <p>
                  Discover a variety of beers from around the world!
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
