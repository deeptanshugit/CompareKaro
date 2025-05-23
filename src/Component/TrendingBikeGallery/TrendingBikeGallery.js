import styles from "./TrendingBikeGallery.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Col, Container, Image, Row } from "react-bootstrap";
import OutlinedButton from "../OutlinedButton/OutlineButton";

const prices = [
  {
    city: "Mumbai",
    image: "/cities/mumbai.png",
    price: "₹ 1,25,095",
  },
  {
    city: "Bangalore",
    image: "/cities/bangalore.png",
    price: "₹ 1,33,766",
  },
  {
    city: "Delhi",
    image: "/cities/delhi.png",
    price: "₹ 1,25,211",
  },
  {
    city: "Pune",
    image: "/cities/pune.png",
    price: "₹ 1,25,854",
  },
  {
    city: "Hyderabad",
    image: "/cities/hyderabad.png",
    price: "₹ 1,33,534",
  },
  {
    city: "Chennai",
    image: "/cities/chennai.png",
    price: "₹ 1,33,306",
  },
  {
    city: "Kolkata",
    image: "/cities/kolkata.png",
    price: "₹ 1,30,995",
  },
];


export default function TrendingBikeGallery() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <Row>
      <Col>
        <div>
          <Swiper
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // spaceBetween={10}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1008: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            <Container>
              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className="image-section">
                    <Image
                      src="/hunter.webp"
                      alt=""
                      height={200}
                      width={700}
                    ></Image>
                  </div>
                  <div
                    className={`${styles.cardcontent} card-content d-flex p-3 flex-column justify-content-start align-items-star`}
                  >
                    <div className={styles.cardContentBikeName}>
                      Royal Enfield Hunter 350
                    </div>
                    <div
                      className={styles.cardContentP}
                      style={{ color: "grey" }}
                    >
                      <span className={styles.cardContentPrice}>
                        ₹ 1,17,179
                      </span>{" "}
                      Onwards
                    </div>
                    <div style={{ fontSize: 14 }}> On road price, Delhi</div>
                    <div className="pt-2">
                    <OutlinedButton label="Check On-Road Price" onClick={handleClick} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className="image-section">
                    <Image
                      src="/raider.webp"
                      alt=""
                      height={200}
                      width={700}
                    ></Image>
                  </div>
                  <div
                    className={`${styles.cardcontent} card-content d-flex p-3 flex-column justify-content-start align-items-star`}
                  >
                    <div className={styles.cardContentBikeName}>
                      Royal Enfield Hunter 350
                    </div>
                    <div
                      className={styles.cardContentP}
                      style={{ color: "grey" }}
                    >
                      <span className={styles.cardContentPrice}>
                        ₹ 1,17,179
                      </span>{" "}
                      Onwards
                    </div>
                    <div style={{ fontSize: 14 }}> On road price, Delhi</div>
                    <div className="pt-2">
                    <OutlinedButton label="Check On-Road Price" onClick={handleClick} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className="image-section">
                    <Image
                      src="/yahama.webp"
                      alt=""
                      height={200}
                      width={700}
                    ></Image>
                  </div>
                  <div
                    className={`${styles.cardcontent} card-content d-flex p-3 flex-column justify-content-start align-items-star`}
                  >
                    <div className={styles.cardContentBikeName}>
                      Royal Enfield Hunter 350
                    </div>
                    <div
                      className={styles.cardContentP}
                      style={{ color: "grey" }}
                    >
                      <span className={styles.cardContentPrice}>
                        ₹ 1,17,179
                      </span>{" "}
                      Onwards
                    </div>
                    <div style={{ fontSize: 14 }}> On road price, Delhi</div>
                    <div className="pt-2">
                    <OutlinedButton label="Check On-Road Price" onClick={handleClick} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className="image-section">
                    <Image
                      src="/xtreme.webp"
                      alt=""
                      height={200}
                      width={700}
                    ></Image>
                  </div>
                  <div
                    className={`${styles.cardcontent} card-content d-flex p-3 flex-column justify-content-start align-items-star`}
                  >
                    <div className={styles.cardContentBikeName}>
                      Royal Enfield Hunter 350
                    </div>
                    <div
                      className={styles.cardContentP}
                      style={{ color: "grey" }}
                    >
                      <span className={styles.cardContentPrice}>
                        ₹ 1,17,179
                      </span>{" "}
                      Onwards
                    </div>
                    <div style={{ fontSize: 14 }}> On road price, Delhi</div>
                    <div className="pt-2">
                    <OutlinedButton label="Check On-Road Price" onClick={handleClick} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className="image-section">
                    <Image
                      src="/hunter.webp"
                      alt=""
                      height={200}
                      width={700}
                    ></Image>
                  </div>
                  <div
                    className={`${styles.cardcontent} card-content d-flex p-3 flex-column justify-content-start align-items-star`}
                  >
                    <div className={styles.cardContentBikeName}>
                      Royal Enfield Hunter 350
                    </div>
                    <div
                      className={styles.cardContentP}
                      style={{ color: "grey" }}
                    >
                      <span className={styles.cardContentPrice}>
                        ₹ 1,17,179
                      </span>{" "}
                      Onwards
                    </div>
                    <div style={{ fontSize: 14 }}> On road price, Delhi</div>
                    <div className="pt-2">
                    <OutlinedButton label="Check On-Road Price" onClick={handleClick} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className="image-section">
                    <Image
                      src="/raider.webp"
                      alt=""
                      height={200}
                      width={700}
                    ></Image>
                  </div>
                  <div
                    className={`${styles.cardcontent} card-content d-flex p-3 flex-column justify-content-start align-items-star`}
                  >
                    <div className={styles.cardContentBikeName}>
                      Royal Enfield Hunter 350
                    </div>
                    <div
                      className={styles.cardContentP}
                      style={{ color: "grey" }}
                    >
                      <span className={styles.cardContentPrice}>
                        ₹ 1,17,179
                      </span>{" "}
                      Onwards
                    </div>
                    <div style={{ fontSize: 14 }}> On road price, Delhi</div>
                    <div className="pt-2">
                    <OutlinedButton label="Check On-Road Price" onClick={handleClick} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className="image-section">
                    <Image
                      src="/xtreme.webp"
                      alt=""
                      height={200}
                      width={700}
                    ></Image>
                  </div>
                  <div
                    className={`${styles.cardcontent} card-content d-flex p-3 flex-column justify-content-start align-items-star`}
                  >
                    <div className={styles.cardContentBikeName}>
                      Royal Enfield Hunter 350
                    </div>
                    <div
                      className={styles.cardContentP}
                      style={{ color: "grey" }}
                    >
                      <span className={styles.cardContentPrice}>
                        ₹ 1,17,179
                      </span>{" "}
                      Onwards
                    </div>
                    <div style={{ fontSize: 14 }}> On road price, Delhi</div>
                    <div className="pt-2">
                    <OutlinedButton label="Check On-Road Price" onClick={handleClick} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Container>

            <div className={`${styles.swiperNavBtn} swiper-button-next`}></div>
            <div className={`${styles.swiperNavBtn} swiper-button-prev`}></div>
          </Swiper>
        </div>
      </Col>
    </Row>
  );
}
