import { useEffect, useRef, useState } from "react";

export default function SearchPopup() {
  const [isActive, setisActive] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // Clicked outside the popup
        setisActive(false);
        // Perform close action here
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="popup-show-form" ref={popupRef}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setisActive((pre) => !pre);
        }}
        className="tf-btn btn-white btn-find btn-show"
      >
        <i className="icon-search-solid" />
        <span className="bg-effect" />
      </a>
      <div
        className={`popup-show popup-form-search ${isActive ? "show" : ""} `}
      >
        <div className="close-form">
          <i className="icon-times-solid" />
        </div>
        <form
          className="form-search style-line-bot style-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <fieldset className="text">
            <input
              type="text"
              placeholder="Search..."
              className=""
              name="text"
              tabIndex={0}
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>
          <button className="" type="submit">
            <i className="icon icon-search-solid" />
          </button>
        </form>
        <ul className="wrap-tag d-flex align-items-center flex-wrap gap_16">
          <li className="tag-item d-flex align-items-center gap_12">
            <span className="sub-heading text_black">Blog</span>
            <span className="remove-item">
              <i className="icon-times-solid" />
            </span>
          </li>
          <li className="tag-item d-flex align-items-center gap_12">
            <span className="sub-heading text_black">Single Post</span>
            <span className="remove-item">
              <i className="icon-times-solid" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
