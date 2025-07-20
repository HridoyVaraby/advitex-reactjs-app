export default function CommentBox() {
  return (
    <form className="form-leave-comment" onSubmit={(e) => e.preventDefault()}>
      <div className="wrap">
        <fieldset className="">
          <textarea
            className=""
            rows={4}
            placeholder="Comment*"
            tabIndex={2}
            aria-required="true"
            required
            defaultValue={""}
          />
        </fieldset>
        <div className="tf-grid-layout md-col-3">
          <fieldset className="">
            <input
              className=""
              type="text"
              placeholder="Name*"
              name="text"
              tabIndex={2}
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>
          <fieldset className="">
            <input
              className=""
              type="email"
              placeholder="Email*"
              name="email"
              tabIndex={2}
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>
          <fieldset className="">
            <input
              className=""
              type="text"
              placeholder="Website*"
              name="website"
              tabIndex={2}
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>
        </div>
      </div>
      <div className="button-submit mt_32">
        <button className="tf-btn btn-primary2" type="submit">
          <span> Post Comment</span>
          <span className="bg-effect" />
        </button>
      </div>
    </form>
  );
}
