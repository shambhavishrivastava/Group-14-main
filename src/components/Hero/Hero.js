import React from "react"
import Image from "../Images/Images"
const Hero = () => {
  return (
    <div>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Image
              className="d-block mx-lg-auto img-fluid"
              filename={"HomePic1.jpg"}
              alt="1"
            />
            <div class="container">
              <div class="carousel-caption text-start">
                <h1 className="text-light">Connect.Share.Grow</h1>
                <p>
                  <h5>University for Women: University with a change</h5>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <Image
              className="d-block mx-lg-auto img-fluid"
              filename={"HomePic2.jpg"}
              alt="1"
            />
            <div class="container">
              <div class="carousel-caption">
                <h1>"Banasthali is enshrined in my heart"</h1>
                <p>
                  <h5>-Mahatma Gandhi(1946)</h5>
                </p>
                <p>
                  <h5 className="text-warning">
                    Banasthali Vidyapith, established in 1935, is the world's
                    largest residential university for women, doing pioneering
                    work in its field for more than eight decades. Only of its
                    kind origin: The 'Banasthali story' has no parallel across
                    the globe.
                  </h5>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <Image
              className="d-block mx-lg-auto img-fluid"
              filename={"HomePic3.jpg"}
              alt="1"
            />
            <div class="container">
              <div class="carousel-caption text-end">
                <h1 className="text-center text-info">
                  "If I had been a girl I would have come to Banasthali for my
                  education"
                </h1>
                <p>
                  <h5>-Pandit Nehru (1945)</h5>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6"></div>
          <div class="col-md-20">
            <h1 class="display-5 fw-bold lh-1 mb-3">
              Definitive Guide To College Collections
            </h1>
            <p class="lead">
              Banasthali Vidyapith aims at the synthesis of spiritual values and
              scientific achievements of both the East and the West. Its
              educational programme is based on the concept of "Panchmukhi
              Shiksha" and aims at all round harmonious development of
              personality. Emphasis on Indian culture and thought characterized
              by simple living and khadi wearing are hallmarks of life at
              Banasthali.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
