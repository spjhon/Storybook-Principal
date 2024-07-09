import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./Transition.css"; // Archivo de estilos CSS para las transiciones

/**
 * Este componente demuestra el uso de react-transition-group para aplicar
 * transiciones CSS a elementos cuando son montados y desmontados del DOM.
 */
function Transition() {
  // Estado para controlar la visibilidad del botón
  const [showButton, setShowButton] = useState(true);
  // Estado para controlar la visibilidad del mensaje de alerta
  const [showMessage, setShowMessage] = useState(false);
  // Referencia al nodo DOM que será animado
  const nodeRef = useRef(null);

  return (
    <div style={{ paddingTop: "2rem" }}>
      {showButton && (
        // Botón para mostrar el mensaje de alerta
        <button onClick={() => setShowMessage(true)}>Show Message</button>
      )}
      <CSSTransition
        in={showMessage} // Controla si el componente debe estar visible
        nodeRef={nodeRef} // Referencia al nodo DOM
        timeout={300} // Duración de la transición en milisegundos
        classNames="alert" // Clases CSS para aplicar transiciones
        unmountOnExit // Desmonta el nodo del DOM cuando showMessage es false
        onEnter={() => setShowButton(false)} // Acción al iniciar la transición de entrada
        onExited={() => setShowButton(true)} // Acción al finalizar la transición de salida
      >
        <div ref={nodeRef}>
          <p>This alert message is being transitioned in and out of the DOM.</p>
          {/* Botón para cerrar el mensaje de alerta */}
          <button onClick={() => setShowMessage(false)}>Close</button>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Transition;

