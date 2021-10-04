const Yolo = window.Yolo ?? {};

Yolo.queue = {};

Yolo.checkQueue = (q) => {
  if (typeof Yolo.queue[q] != "undefined") {
    clearTimeout(Yolo.queue[q]);
  }
};

Yolo.isVisibleInViewPort = (el) => {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
};

Yolo.sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

Yolo.isMobile = () => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

Yolo.Fx = (el, options) => {
  if (options?.style) {
    //apply custom style
    Object.keys(options.style).map((i) => {
      let s = options.style[i];
      selector.style[i] = s;
    });
  } else if (options?.addClass) {
    //add css classes
    options.addClass.map((c) => {
      selector.classList.add(c);
    });
  } else if (options?.removeClass) {
    //add css classes
    options.removeClass.map((c) => {
      selector.classList.remove(c);
    });
  } else {
    //default behavior: parallax
    const { factor } = options;
    let top = window.scrollY;
    let selector = document.querySelector(el);
    let coordY = selector.offsetTop;

    selector.style.marginTop =
      parseFloat(top / factor).toFixed(2) - coordY + "px";
  }
};

window.addEventListener("load", function () {
  /** FACEBOOK PIXEL **/
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "");
  !!fbq && fbq("init", "252461996886227");
  !!fbq && fbq("track", "PageView");

  /** GOOGLE TAGS MANAGER **/
  loadScript(
    "https://www.googletagmanager.com/gtag/js?id=G-7GEJ71753P",
    console.log
  );
  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());
  gtag("config", "G-7GEJ71753P");

  let tpl = `<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NVRZH4D"height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>`;
  let ele = document.createElement("div");
  ele.innerHTML = tpl;
  document.getElementsByTagName("body")[0].appendChild(ele);
});

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-NVRZH4D");

function gtag() {
  dataLayer.push(arguments);
}
function loadScript(url, callback) {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    //legacy
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //modern
    script.onload = function () {
      !!callback && callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);

  const el2fx = [
    {
      selector: ".circle2",
      queued: false,
      options: { factor: 4 },
    },
    {
      selector: ".circle3",
      queued: false,
      options: { factor: 30 },
    },
  ];

  const runFx = () => {
    if (Yolo.isMobile()) return;
    
    el2fx.map((item, i) => {
      if (item.queued) {
        //remove previous queued
        Yolo.checkQueue(`${item.selector}`);

        //set new queue
        Yolo.queue[`${item.selector}`] = setTimeout(() => {
          Yolo.Fx(item.selector, item.options);
        }, item.queueTime);
      } else {
        Yolo.Fx(item.selector, item.options);
      }
    });
  };

  runFx();
  window.addEventListener("scroll", runFx);
}
