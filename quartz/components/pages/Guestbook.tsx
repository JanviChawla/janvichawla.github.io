import { i18n } from "../../i18n"
import { QuartzComponentConstructor, QuartzComponentProps } from "../types"

function Guestbook({ cfg }: QuartzComponentProps) {
  return (
    <article class="popover-hint">
      <h1 class="article-title">Guestbook</h1>
      <p>{i18n(cfg.locale).pages.guestbook.guestbook}</p>
      <div id="HCB_comment_box">
        <a href="http://www.htmlcommentbox.com">Comment Box</a> is loading comments...
      </div>
      {/* Inline script using dangerouslySetInnerHTML */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (!window.hcb_user) { hcb_user = {}; }
            hcb_user.PAGE = "https://janvichawla.com/guestbook";
            (function() {
              var s = document.createElement("script"),
              l = hcb_user.PAGE || ("" + window.location).replace(/'/g, "%27"),
              h = "https://www.htmlcommentbox.com";
              s.setAttribute("type", "text/javascript");
              s.setAttribute("src", h + "/jread?page=" + encodeURIComponent(l).replace("+", "%2B") +
                "&mod=%241%24wq1rdBcg%24g0RbboF6NuuPuJZ%2Fd%2FYXC." +
                "&opts=17687&num=10&ts=1747165462550");
              if (typeof s !== "undefined") document.getElementsByTagName("head")[0].appendChild(s);
            })();
          `,
        }}
      />
    </article>
  )
}

export default (() => Guestbook) satisfies QuartzComponentConstructor