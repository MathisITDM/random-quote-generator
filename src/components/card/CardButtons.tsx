import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";

export default function CardButtons(props: {
  currentColor: string;
  handleNewQuote: () => void;
}) {
  return (
    <div className="buttons">
      <div style={{ display: "flex", gap: 10 }}>
        <a
          id="tweet-quote"
          style={{ backgroundColor: props.currentColor }}
          href="https://twitter.com/intent/tweet"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} color="white" size="lg" />
        </a>
        <a
          id="tumblr-quote"
          style={{ backgroundColor: props.currentColor }}
          href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Zig%20Ziglar&content=If%20you%20can%20dream%20it%2C%20you%20can%20achieve%20it.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
        >
          <FontAwesomeIcon icon={faTumblr} color="white" size="lg" />
        </a>
      </div>

      <button
        type="button"
        style={{ backgroundColor: props.currentColor }}
        id="new-quote"
        onClick={props.handleNewQuote}
      >
        New quote
      </button>
    </div>
  );
}
