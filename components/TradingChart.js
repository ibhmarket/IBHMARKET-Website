// TradingViewWidget.jsx

import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { mediaQuery } from "../styleConstants/index";

let tvScriptLoadingPromise;

const Wraper = styled.div``;
const Graph = styled.div`
  height: 576px;
  width: 100%;

  ${mediaQuery.uptoMobile} {
    width: 100%;
    height: 236px;
  }
`;

export default function TradingChart(props) {
  const { symbol } = props;
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_b9c80") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: symbol,
          interval: "W",
          timezone: "Asia/Kolkata",
          theme: "dark",
          style: "1",
          locale: "in",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          hide_side_toolbar: true,
          container_id: "tradingview_b9c80",
          autosize: true,
        });
      }
    }
  }, [symbol]);

  return (
    <Wraper className="tradingview-widget-container">
      <Graph id="tradingview_b9c80" />
    </Wraper>
  );
}
