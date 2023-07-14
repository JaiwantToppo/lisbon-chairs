export default function Testimonial() {
  return (
    <>
      <section className="testimonial-section">
        <div className="grid-3-cols">
          <img src="customers.jpg" alt="People sitting on chairs" />
          <div className="testimonial-box">
            <h2>"We couldn't live without these chairs anymore"</h2>
            <blockquote className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellat at, nesciunt quia cum minima ipsum culpa totam sapiente
              recusandae earum debitis doloribus in quasi voluptatibus!
            </blockquote>
            <p className="testimonial-author">&mdash; Mary and Sarah Johnson</p>
          </div>
        </div>
      </section>
    </>
  );
}
