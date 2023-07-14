export default function Section() {
  return (
    <>
      <section>
        <h2>What makes our chairs special</h2>
        <div className="grid-3-cols">
          <Features
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="features-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            }
            title={<strong>Science meets design</strong>}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            similique adipisci praesentium."
          />
          <Features
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="features-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title={<strong>Maximal comfort</strong>}
            text="Reprehenderit optio placeat quasi excepturi architecto, explicabo
            facilis perspiciatis error maxime magnam."
          />
          <Features
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="features-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            }
            title={<strong>Ethical and sustainable</strong>}
            text="Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat
            omnis est laudantium voluptatem voluptas!"
          />
        </div>
      </section>
    </>
  );
}

function Features({ svg, title, text }) {
  return (
    <>
      <div>
        {svg}
        <p className="features-title">{title}</p>
        <p className="features-text">{text}</p>
      </div>
    </>
  );
}
