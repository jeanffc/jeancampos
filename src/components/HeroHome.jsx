import React from 'react';

const HeroHome = () => {

  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-6xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Hi, this is <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Jean Campos</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                I'm a Full Stack Developer with more than 10 years of experience in Leading and Developing projects.

                I was responsible for delivering over 40 projects and campaigns in the areas of web, mobile, games, e-learning, it, and service desk, for clients such as Embraer, Volkswagen, Grupo Bimbo (Pullman, PlusVita, Ana Maria), Grupo Lonza (HTH), Aurora (Lindt, Jose Cuervo, The Macallan), Omni Financeira, Century 21, Txai Resorts, Prudence, mLabs (SaaS), among others.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
