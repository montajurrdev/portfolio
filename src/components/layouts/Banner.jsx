import React from 'react'
import Heading from '../Heading'
import Container from '../Container'

const Banner = () => {
  return (
    <>
      <section id="home">
        <div className="bg-[url(/src/assets/banner.png)] bg-no-repeat bg-cover bg-[position:20%] md:bg-center ">
          <div className=" bg-black/60 min-h-screen flex  items-center ">
            <Container className={"w-full"}>
              <div className="flex flex-col justify-center items-center gap-y-4 px-4 sm:px-6 text-center">
                <Heading
                  className="text-[#fafafa] font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl leading-tight"
                  text="Frontend Developer"
                  as="h1"
                />
                <Heading
                  className="text-[#fafafa] text-base sm:text-lg md:text-xl max-w-2xl"
                  text='"Development is not about how it looks,it is about how it performs"'
                  as="p"
                />
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner