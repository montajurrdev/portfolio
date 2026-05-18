import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
import UIE_one from "/src/assets/UIE_one.png";
import UIE_two from "/src/assets/UIE_two.png";
import UIE_three from "/src/assets/UIE_three.png";
import UIE_four from "/src/assets/UIE_four.png";
import UIE_five from "/src/assets/UIE_five.png";
import UIE_six from "/src/assets/UIE_six.png";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const UiElements = () => {
  const uiElements = [UIE_one, UIE_two, UIE_three, UIE_four, UIE_five, UIE_six];
  return (
    <>
      <section>
        <Container className={"py-16 md:py-20"}>
          <div className="pb-8">
            <Heading
              text="UI Elements Showcase"
              as="h2"
              className="text-3xl md:text-5xl font-bold text-center "
            />
            <Heading
              text="This is all about me.That's a fun request! A great 'About Me' title should be engaging and quickly communicate your value or personality."
              as="h5"
              className="text-base  text-center pt-2 max-w-3xl mx-auto"
            />
          </div>
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={1}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {uiElements.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="drop-shadow-2xl py-10 px-5 drop-shadow-gray-500">
                    <div className="h-[220px] sm:h-[260px] md:h-[300px]  flex items-center justify-center">
                      <Image imgSrc={image} className={"w-full h-full object-contain "} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  );
};

export default UiElements;
