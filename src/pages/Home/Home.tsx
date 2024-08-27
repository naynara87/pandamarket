import { Helmet } from "react-helmet";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import "./Home.scss";

function Home() {
  return (
    <>
      <Helmet>
        <title>판다마켓</title>
      </Helmet>
      <Header />;
      <main>
        <div className="main-banner">
          <div className="banner-background">
            <div className="banner-wrap">
              <div className="banner-text">
                <h2 className="title">
                  일상의 모든 물건을 <br />
                  거래해 보세요
                </h2>
                <a className="btn-lg btn-primary" href="/items.html">
                  구경하러 가기
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-list">
          <section className="section sec01">
            <div className="section-img">
              <img src="./assets/img/Img_home_01.png" alt="Hot item" />
            </div>
            <div className="section-text">
              <span className="label">Hot item</span>
              <h3 className="title">
                인기 상품을 <br />
                확인해 보세요
              </h3>
              <p className="description">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </section>
          <section className="section sec02 reverse">
            <div className="section-img">
              <img src="./assets/img/Img_home_02.png" alt="Search" />
            </div>
            <div className="section-text">
              <span className="label">Search</span>
              <h3 className="title">
                구매를 원하는 <br />
                상품을 검색하세요
              </h3>
              <p className="description">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </section>
          <section className="section sec03">
            <div className="section-img">
              <img src="./assets/img/Img_home_03.png" alt="Register" />
            </div>
            <div className="section-text">
              <span className="label">Register</span>
              <h3 className="title">
                판매를 원하는 <br />
                상품을 등록하세요
              </h3>
              <p className="description">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </section>
        </div>
        <div className="sub-banner">
          <div className="banner-background">
            <div className="banner-wrap">
              <div className="banner-text">
                <h2 className="title">
                  믿을 수 있는 <br />
                  판다마켓 중고거래
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />;
    </>
  );
}

export default Home;
