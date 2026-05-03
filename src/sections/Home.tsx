import picOfMe from "../assets/images/me.png";
import { Particles } from "../components";
import "@sectionsCss/home.css";

export function Home() {
  return (
    <section id="home" className="home-main">
      <div className="home-particles">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#000000"]}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>
      <div className="home-content-box">
        <div className="home-word-box">
          <span className="home-word-box-header">Hi There!</span>
          <br></br>
          <br></br>
          <p className="home-word-box-body">
            I’m a passionate software engineer focused on building clean,
            scalable full-stack applications. I enjoy learning new technologies,
            tackling unfamiliar problems, and continuously improving my skill
            set through hands-on projects.
          </p>
        </div>
        <div className="home-side-box">
          <div
            className="home-image"
            style={{ backgroundImage: `url(${picOfMe})` }}
          />
          <div>
            <p className="home-name">Brandon Nauta</p>
            <p className="home-descriptors">
              <span>Software</span>{" "}
              <span className="text-blue-700">Engineer</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
