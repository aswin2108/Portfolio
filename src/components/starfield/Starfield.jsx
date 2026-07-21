import Stars from "../../images/star2.jpg";

// A fixed background layer that sits BEHIND all page content: the night-sky
// image at the back, with shooting stars streaking just above it — so the
// stars pass between the background and the page elements.
export const Starfield = () => {
  return (
    <div className="starfield" aria-hidden="true">
      <div
        className="starfield-bg"
        style={{ backgroundImage: `url(${Stars})` }}
      />
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <div className="shooting-star shooting-star-3" />
      <div className="shooting-star shooting-star-4" />
    </div>
  );
};

export default Starfield;
