import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import Trigger from './Trigger';

/**
 https://martinfowler.com/articles/headless-component.html
 */
 export interface Item {
  icon: string;
  text: string;
  description: string;
}

export type DropdownProps = {
  items: Item[];
};


const HeadLessDropDown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className="dropdown">
      <Trigger
        label={selectedItem ? selectedItem.text : "Select an item..."}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <DropdownMenu items={items} onItemClick={setSelectedItem} />}
    </div>
  );
};

export default HeadLessDropDown;

/*
const HeadLessDropDown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);


El atributo tabIndex={0} en el código proporciona dos funcionalidades principales:

Accesibilidad: Permite que el elemento sea enfocado a través de la navegación del teclado (por ejemplo, 
usando la tecla Tab). Esto es esencial para los usuarios que navegan por la web usando el teclado, mejorando 
la accesibilidad del componente.

Orden de Foco: Un valor de tabIndex igual a 0 incluye el elemento en el orden de tabulación natural del 
documento. Es decir, el elemento recibirá foco después de todos los elementos que preceden en el DOM y que 
tienen un valor de tabIndex de 0 o superior.


  return (
    <div className="dropdown">

      <div className="trigger" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        <span className="selection">
          {selectedItem ? selectedItem.text : "Select an item..."}
        </span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="item-container"
            >
              <img src={item.icon} alt={item.text} />
              <div className="details">
                <div>{item.text}</div>
                <small>{item.description}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


*/

