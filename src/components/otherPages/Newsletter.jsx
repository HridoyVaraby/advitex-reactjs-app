export default function Newsletter() {
  return (
    <form
      id="subscribe-form"
      className="form-newsletter style-1 subscribe-form mb_10"
      onSubmit={(e) => e.preventDefault()}
    >
      <div id="subscribe-content" className="subscribe-content">
        <fieldset className="email">
          <input
            id="subscribe-email"
            type="email"
            name="email-form"
            className="subscribe-email style-2"
            placeholder="Enter your e-mail"
            tabIndex={0}
            aria-required="true"
          />
        </fieldset>
        <div className="button-submit">
          <button
            id="subscribe-button"
            className="subscribe-button tf-btn rounded-12 btn-primary2"
            type="button"
          >
            <span>Subscribe</span>
            <span className="bg-effect" />
          </button>
        </div>
        <div className="icon">
          <i className="icon-envelope-solid" />
        </div>
      </div>
      <div id="subscribe-msg" className="subscribe-msg" />
    </form>
  );
}
