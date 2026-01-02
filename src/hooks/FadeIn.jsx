import { useEffect, useRef, useState } from "react";

function FadeIn({ children }) {
  const ref = useRef(null);

  // COMEÇA VISÍVEL (regra de ouro)
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false)
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-10 blur"}
      `}
    >
      {children}
    </div>
  );
}

export default FadeIn;
