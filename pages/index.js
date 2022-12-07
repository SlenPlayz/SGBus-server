import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div>
        <nav>
          <a href="https://github.com/SlenPlayz/SGBus">
            <i class="fa-brands fa-github"></i>
          </a>
        </nav>
        <div class="headingCard">
          <h1>SG Bus</h1>
          <span class="btnSpan">
            <a href="https://github.com/SlenPlayz/SGBus/releases/latest">
              <button>
                <i class="fa-solid fa-download"></i>&nbsp; Download
              </button>
            </a>
          </span>
        </div>
        <div class="featureCard">
          <div class="feature">
            <h2>Nearby stops</h2>
            <h6>Shows stops around you</h6>
          </div>
          <div class="image">
            <img src="https://i.ibb.co/ZKj9HfW/Nearby.png" alt="" srcset="" />
          </div>
        </div>
        <div class="featureCard">
          <div class="feature">
            <h2>Map</h2>
            <h6>View stops on a map</h6>
          </div>
          <div class="image">
            <img src="https://i.ibb.co/dkj00yQ/Map.png" alt="" srcset="" />
          </div>
        </div>
        <div class="featureCard">
          <div class="feature">
            <h2>Search</h2>
            <h6>Search for stops and buses</h6>
          </div>
          <div class="image">
            <img src="https://i.ibb.co/3pzX80F/Search.png" alt="" srcset="" />
          </div>
        </div>
        <div class="featureCard">
          <div class="feature">
            <h2>MRT Map</h2>
            <h6>View a map of MRT stations in singapore</h6>
          </div>
          <div class="image">
            <img src="https://i.ibb.co/jJ6FLWP/MRT-Map.png" alt="" srcset="" />
          </div>
        </div>
        <div class="featureCard">
          <div class="feature">
            <h2>Favourites</h2>
            <h6>Easily access frequently used stops</h6>
          </div>
          <div class="image">
            <img
              src="https://i.ibb.co/YL6VhR6/Favourites.png"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div class="featureCard">
          <div class="feature">
            <h2>Arrival timings</h2>
            <h6>Shows the arival timings of Buses</h6>
          </div>
          <div class="image">
            <img src="https://i.ibb.co/Y3d6ZkK/Stop.png" alt="" srcset="" />
          </div>
        </div>
        <div class="featureCard">
          <div class="feature">
            <h2>Bus routes</h2>
            <h6>See the route of a bus</h6>
          </div>
          <div class="image">
            <img src="https://i.ibb.co/xF81QB4/Route.png" alt="" srcset="" />
          </div>
        </div>
        <div class="featureCard">
          <div class="feature">
            <h2>Bus route maps</h2>
            <h6>See the route of a bus on a map</h6>
          </div>
          <div class="image">
            <img
              src="https://i.ibb.co/GCjnyz4/Route-Map.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
