import styles from "./accordion.css";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import star from "./images/icon-star.svg";

import items from "./items";
function AccordionCard() {
  const [activeNumber, setActiveNumber] = useState(null);
  const handleAccordion = (itemNumber) => {
    if (activeNumber === itemNumber) {
      setActiveNumber(null);
    } else {
      setActiveNumber(itemNumber);
    }
  };

  return (
    <div className="cardContainer">
      <div className="header">
        <img src={star} className="star" alt="star" />
        <h1 className="title">FAQs</h1>
      </div>

      {items.map((item) => (
        <AccordionItem
          handleAccordion={handleAccordion}
          activeNumber={activeNumber}
          itemNumber={item.itemNumber}
          title={item.title}
          content={item.content}
          totalNumber={items.length}
        />
      ))}
    </div>
  );
}
export default AccordionCard;
