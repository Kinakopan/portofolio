import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    const Tawk_API = window.Tawk_API || {};
    Tawk_API.onLoad = () => {
      Tawk_API.showWidget();
    };
    const s1 = document.createElement("script");
    s1.setAttribute("src", "https://embed.tawk.to/YOUR_WIDGET_ID/default");
    s1.setAttribute("crossorigin", "*");
    s1.async = true;
    document.head.appendChild(s1);
  }, []);

  return <></>;
};

export default TawkTo;
