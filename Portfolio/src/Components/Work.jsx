import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Projects } from "../Assets/data.js"; // Importing Projects array

const Work = () => {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={4000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {Projects.map((project) => (
              <div key={project.title} className="workItem">
                {/* Replace image tag with video tag */}
                <video src={project.imgSrc} alt={project.title} controls />
                <aside>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.url}
                  >
                    View Source code
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
