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
        script.onerror = () => {
          console.error(`Failed to load script: ${src}`);
        };
        document.body.appendChild(script);
      } else if (callback) {
        callback();
      }
    };

    // Initialize the widget
    const initializeWidget = () => {
      console.log("Initializing widget");
      if (!window.myWidgetParam) {
        window.myWidgetParam = [];
      }
      window.myWidgetParam.push({
        id: 1,
        cityid: "5206379", // Pittsburgh city ID
        appid: "b0485d9d50a95231d634144e99df2989", // Your API key
        units: "imperial",
        containerid: "openweathermap-widget-1",
      });
      console.log("Widget parameters:", window.myWidgetParam);
      if (window.myWidgetInit) {
        try {
          window.myWidgetInit();
        } catch (error) {
          console.error("Error during widget initialization:", error);
        }
      } else {
        console.error("Widget initialization function not found");
      }
    };

    // Ensure the container exists and retry initialization if necessary
    const retryInitializeWidget = (retries: number) => {
      if (retries <= 0) {
        console.error("Widget initialization failed after retries");
        return;
      }
      const container = document.getElementById("openweathermap-widget-1");
      if (container && window.myWidgetInit) {
        initializeWidget();
      } else {
        console.log(
          `Retrying widget initialization, attempts left: ${retries}`
        );
        setTimeout(() => retryInitializeWidget(retries - 1), 1000);
      }
    };

    // Load the necessary scripts and initialize the widget
    document.addEventListener("DOMContentLoaded", () => {
      loadScript(
        "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js",
        "d3-script",
        () => {
          loadScript(
            "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js",
            "openweathermap-widget-script",
            () => retryInitializeWidget(20) // Retry up to 20 times
          );
        }
      );
    });

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
