// Componente extraido de esta pagina:
// https://codesandbox.io/p/sandbox/react-carousel-3d-9x3wt?file=%2Fsrc%2FSlider.js%3A1%2C1-118%2C1

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importa la hoja de estilos de FontAwesome desde una CDN

// Define interfaces for the component props
interface SliderItem {
  id: number;
  bgColor: string;
  icon: string;
  title: string;
  desc: string;
}

/*
La razón por la cual el tipo SliderItem[] está definido en la interfaz SliderProps es porque el 
componente Slider espera recibir una lista (array) de objetos SliderItem.
*/
export interface SliderProps {
  data: SliderItem[];
  activeSlide: number;
}

// Define SliderContent props
interface SliderContentProps {
  icon: string;
  title: string;
  desc: string;
}

import { useState } from "react";
import React from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./styles.module.css";

const Slider: React.FC<SliderProps> = (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);


  /*
Función next:

Propósito: Esta función incrementa el activeSlide en 1, moviendo al siguiente slide, siempre y cuando no 
se haya alcanzado el último slide.'

Condición: activeSlide < props.data.length - 1
Verifica si el slide activo actual (activeSlide) es menor que el índice del último slide 
(props.data.length - 1). Esto asegura que no se intente avanzar más allá del último slide.

Acción: setactiveSlide(activeSlide + 1)
Si la condición es verdadera, incrementa activeSlide en 1 usando setactiveSlide. Esto actualiza 
el estado del slide activo, moviendo al siguiente slide.

Explicación Detallada del Operador Lógico &&:

Ambas funciones utilizan el operador lógico && para combinar la condición y la acción en una sola línea. 
Este operador funciona de la siguiente manera:

Evalúa la expresión a la izquierda del &&.
Si esa expresión es verdadera, evalúa la expresión a la derecha del &&.
Si la expresión a la izquierda es falsa, no evalúa la expresión a la derecha (cortocircuito) 
y la acción no se ejecuta.

Por lo tanto, en next:
Si activeSlide < props.data.length - 1 es verdadero, entonces setactiveSlide(activeSlide + 1) se ejecuta.
Si activeSlide < props.data.length - 1 es falso, setactiveSlide(activeSlide + 1) no se ejecuta.

  */
  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => 
    activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  const getStyles = (index: number) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
  };

  return (
    <>
      {/* carousel */}
      <div className={styles.overflowResponsive}>
      <div className={styles.slideContainer} {...handlers}>
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className={styles.slide}
              style={{
                background: item.bgColor,
                boxShadow: `0 5px 20px ${item.bgColor}30`,
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
            </div>

            <div
              className={styles.reflection}
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i),
              }}
            >
            </div>

          </React.Fragment>
        ))}
      </div>
      </div>
      {/* carousel */}

      <div className={styles.btns}>
        <div onClick={prev}>{ArrowIconRight()}</div>

        <div onClick={next}>{ArrowIconLeft()}</div>
      </div>
    </>
  );
};

export default Slider;

const SliderContent: React.FC<SliderContentProps> = (props) => {
  return (
    <div className={styles.sliderContent}>
      <img src={props.icon} alt="icono" width={50} height={50} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

const ArrowIconRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6508 4.24075C16.0701 4.60017 16.1187 5.23147 15.7593 5.65079L10.3171 12L15.7593 18.3492C16.1187 18.7685 16.0701 19.3998 15.6508 19.7593C15.2315 20.1187 14.6002 20.0701 14.2407 19.6508L8.24074 12.6508C7.91975 12.2763 7.91975 11.7237 8.24074 11.3492L14.2407 4.34921C14.6002 3.92989 15.2315 3.88132 15.6508 4.24075Z"
      fill="#152C70"
    />
  </svg>
);

const ArrowIconLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.34923 4.24075C7.9299 4.60017 7.88134 5.23147 8.24076 5.65079L13.6829 12L8.24076 18.3492C7.88134 18.7685 7.9299 19.3998 8.34923 19.7593C8.76855 20.1187 9.39985 20.0701 9.75927 19.6508L15.7593 12.6508C16.0803 12.2763 16.0803 11.7237 15.7593 11.3492L9.75927 4.34921C9.39985 3.92989 8.76855 3.88132 8.34923 4.24075Z"
      fill="#152C70"
    />
  </svg>
);
