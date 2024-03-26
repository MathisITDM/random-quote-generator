import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Quote } from "../../App";

export default function CardContent(props: { selectedQuote?: Quote }) {
  return (
    <>
      {props.selectedQuote && (
        <>
          <div id="quote-text">
            <FontAwesomeIcon
              style={{ marginRight: "0.4em" }}
              icon={faQuoteLeft}
            />
            <span id="text">{props.selectedQuote.quote}</span>
          </div>
          <div id="quote-author">
            - <span id="author">{props.selectedQuote.author}</span>
          </div>
        </>
      )}
    </>
  );
}
