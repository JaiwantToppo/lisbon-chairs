import { Button } from "../App";

export default function Header() {
  const handleClickScroll = () => {
    const element = document.querySelector(".chair");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <div className="header-text-box">
          <h1>We design and build better chairs, for a better life</h1>
          <p className="header-text">
            In a small shop in the heart of Lisbon, we spend our days
            relentlessly perfecting the chair. The result is a perfect blend of
            beauty and comfort, that will have a lasting impact on your health.
          </p>
          <Button className="btn--big" onClick={handleClickScroll}>
            Shop chairs
          </Button>
        </div>
        <img src="hero.jpg" alt="Photo" />
      </header>
    </>
  );
}
