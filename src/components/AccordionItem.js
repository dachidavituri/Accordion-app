import plusIcon from "./images/icon-plus.svg";
import minusIcon from "./images/icon-minus.svg";
function AccordionItem(props) {
  const changeIcons =
    props.activeNumber === props.itemNumber ? minusIcon : plusIcon;
  const isLastItem = props.itemNumber === props.totalNumber;
  return (
    <div onClick={() => props.handleAccordion(props.itemNumber)}>
      <div className="question-container">
        <p className="question">{props.title}</p>

        <img src={changeIcons} className="changeIcon" alt="icon" />
      </div>
      {props.activeNumber === props.itemNumber ? (
        <p className="answer">{props.content}</p>
      ) : null}
      {!isLastItem && <div className="line"></div>}
    </div>
  );
}
export default AccordionItem;
