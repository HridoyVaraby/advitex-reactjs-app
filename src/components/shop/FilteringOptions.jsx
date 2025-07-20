import Slider from "rc-slider";
const brands = ["apple", "samsung", "xiaomi", "nokia", "sony", "oppo"];

export default function FilteringOptions({ allProps }) {
  return (
    <>
      {" "}
      <form className="form-search mb_30" onSubmit={(e) => e.preventDefault()}>
        <fieldset className="text">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-cycle"
            name="search"
            tabIndex={0}
            defaultValue=""
            aria-required="true"
            required
          />
        </fieldset>
        <button className="" type="submit">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.875 1.875C8.43018 1.875 5.625 4.68018 5.625 8.125C5.625 9.62158 6.1499 10.9937 7.03125 12.0703L2.05078 17.0508L2.94922 17.9492L7.92969 12.9688C9.00635 13.8501 10.3784 14.375 11.875 14.375C15.3198 14.375 18.125 11.5698 18.125 8.125C18.125 4.68018 15.3198 1.875 11.875 1.875ZM11.875 3.125C14.6436 3.125 16.875 5.35645 16.875 8.125C16.875 10.8936 14.6436 13.125 11.875 13.125C9.10645 13.125 6.875 10.8936 6.875 8.125C6.875 5.35645 9.10645 3.125 11.875 3.125Z"
              fill="#5F697C"
            />
          </svg>
        </button>
      </form>
      <div className="categories">
        <h6 className="title mb_26">Categories</h6>
        <ul className="list d-grid gap_9">
          <li className="active">
            <a href="#" className="link text-body-1">
              Phone, Tablet
            </a>
          </li>
          <li>
            <a href="#" className="link text-body-1">
              Sound
            </a>
          </li>
          <li>
            <a href="#" className="link text-body-1">
              Clock, Camera
            </a>
          </li>
          <li>
            <a href="#" className="link text-body-1">
              Household appliances
            </a>
          </li>
          <li>
            <a href="#" className="link text-body-1">
              Accessory
            </a>
          </li>
        </ul>
      </div>
      <div className="filter mb_42">
        <div className="heading d-flex align-items-center justify-content-between mb_50">
          <h6 className="">Fillters</h6>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              allProps.clearFilter();
            }}
            className="btn-reset text_mono-gray-7 d-flex align-items-center fw-5 gap_4"
          >
            <i className="icon-sync-alt-solid" />
            Reset all
          </a>
        </div>
        <div className="brand wg-filter">
          <div className="box-fieldset-item">
            {brands.map((brand, index) => (
              <fieldset
                onClick={() => allProps.setBrands(brand)}
                className="fieldset-item"
                key={brand}
              >
                <input
                  checked={allProps.brands.includes(brand)}
                  type="checkbox"
                  name="brand"
                  readOnly
                  className="tf-check"
                />
                <label className="text_mono-gray text-body-1">
                  {brand.charAt(0).toUpperCase() + brand.slice(1)}
                </label>
              </fieldset>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap-range">
        <div id="range-price-1" className="range-price">
          <h6 className="title text_mono-gray mb_55">Price Range</h6>
          <div className="box-price-product mb_33">
            <div className="box-price-item min">
              <div className="price-val" id="price-min-value" data-currency="$">
                {allProps.price[0]}
              </div>
            </div>
            <div className="box-price-item max">
              <div className="price-val" id="price-max-value" data-currency="$">
                {allProps.price[1]}
              </div>
            </div>
            <a href="#" className="btn-go">
              {" "}
              Go{" "}
            </a>
          </div>
          <div className="price-val-range" id="price-value-range">
            <Slider
              value={allProps.price}
              onChange={(price) => allProps.setPrice(price)}
              range
              min={0}
              max={700}
            />
          </div>
        </div>
      </div>
    </>
  );
}
