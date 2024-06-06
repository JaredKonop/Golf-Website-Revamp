import React, { useEffect } from "react";

declare global {
  interface Window {
    myWidgetParam: any[];
    myWidgetInit?: () => void;
  }
}

const WeatherWidget: React.FC = () => {
  useEffect(() => {
    // Function to load a script
    const loadScript = (src: string, id: string, callback?: () => void) => {
      const existingScript = document.getElementById(id);
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = src;
        script.id = id;
        script.async = true;
        script.onload = callback || (() => {});
        document.body.appendChild(script);
      } else if (callback) {
        callback();
      }
    };

    // Initialize the widget
    const initializeWidget = () => {
      window.myWidgetParam = window.myWidgetParam || [];
      window.myWidgetParam.push({
        id: 1,
        cityid: "5206379", // Pittsburgh city ID
        appid: "b0485d9d50a95231d634144e99df2989", // Your API key
        units: "imperial",
        containerid: "openweathermap-widget-1",
      });
      if (window.myWidgetInit) {
        window.myWidgetInit();
      }
    };

    // Load the necessary scripts and initialize the widget
    loadScript(
      "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js",
      "d3-script",
      () => {
        loadScript(
          "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js",
          "openweathermap-widget-script",
          initializeWidget
        );
      }
    );

    // Cleanup function to reset widget parameters if necessary
    return () => {
      window.myWidgetParam = []; // Resetting parameters may help with re-initialization issues
    };
  }, []);

  return (
    <div
      id="openweathermap-widget-1"
      style={{ width: "100%", height: "auto" }}
    ></div>
  );
};

export default WeatherWidget;
