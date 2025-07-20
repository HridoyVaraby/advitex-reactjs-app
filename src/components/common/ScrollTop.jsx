import { useEffect } from "react";

export default function ScrollTop() {
  useEffect(() => {
    const box = document.querySelector(".scrollTop");
    const liquid = document.querySelector(".liquid");
    const offset = 200;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.min(
        Math.floor((scrollPosition / docHeight) * 100),
        100
      );

      if (liquid) {
        liquid.style.transform = `translate(0, ${100 - percent}%)`;
      }

      if (scrollPosition >= offset) {
        box?.classList.add("active-progress");
      } else {
        box?.classList.remove("active-progress");
      }
    };

    const handleClick = (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    box?.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      box?.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className="scrollTop effect-icon">
      <div className="icon">
        <i className="icon-long-arrow-alt-up-solid" />
      </div>
      <div className="liquid">
        <svg viewBox="0 0 560 20" className="liquid_wave liquid_wave_back">
          <use xlinkHref="#wave" />
        </svg>
        <svg viewBox="0 0 560 20" className="liquid_wave liquid_wave_front">
          <use xlinkHref="#liquid" />
        </svg>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 560 20"
          style={{ display: "none" }}
        >
          <symbol id="liquid">
            <path
              d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
              fill="#"
              style={{
                transition: "stroke-dashoffset 10ms linear",
                strokeDasharray: "301.839, 301.839",
                strokeDashoffset: "251.895px",
              }}
            />
            <path
              d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
              fill="#"
            />
            <path
              d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
              fill="#"
            />
            <path
              d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
              fill="#"
            />
          </symbol>
        </svg>
      </div>
    </div>
  );
}
