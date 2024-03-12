import "./productHome.css";
import Header from "../header/Header";
import patusai from "../../../img/patusai.jpg";
import thadluang from "../../../img/thadluang.jpg";
import motorcycle from "../../../img/motorcycle.jpg";

const ProductHome = () => {
  return (
    <div>
      <Header />
      <section id="product1">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>Super Special Recommended
            Products
          </h1>
        </div>
        <div className="contentImageProducts1">
          <div className="group_itemBox">
            <div className="img">
              <img src={patusai} alt="img" />
            </div>
            <div className="txtOFproduct">
              <h4>Vientiane Airport Pickup Service</h4>
              <p>We will conveniently transport you from the airport to your hotel.</p>
              <p> $10 ￦15,000 </p>
            </div>
          </div>
          <div className="group_itemBox">
            <div className="img">
              <img src={thadluang} alt="img" />
            </div>
            <div className="txtOFproduct">
              <h4> Vientiane City Tour </h4>
              <p>You can travel around Vientiane comfortably.</p>
              <p> $19 ￦30,000 </p>
            </div>
          </div>
          <div className="group_itemBox">
            <div className="img">
              <img src={motorcycle} alt="img" />
            </div>
            <div className="txtOFproduct">
              <h4>Buggy Tour Vang Vieng</h4>
              <p>Take a buggy ride around Vang Vieng</p>
              <p> $35 ￦50,000 </p>
            </div>
          </div>
        </div>

        {/* <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="spennofStyle"></span>Activity Recommended Products
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div>
              <div className="group_itemBox">
                <div className="img">
                  <img src="" alt="img" />
                </div>
                <div className="txtOFproduct">
                  <h4>hjbgi</h4>
                  <p>dfge Kip</p>
                  <div className="star">
                    <div className="on"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default ProductHome;
