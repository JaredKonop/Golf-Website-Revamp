// src/components/FacebookPage.tsx
import React, { useEffect } from "react";

const FacebookPage: React.FC = () => {
  useEffect(() => {
    const initializeFB = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      } else {
        window.fbAsyncInit = function () {
          window.FB.init({
            xfbml: true,
            version: "v10.0",
          });
          window.FB.XFBML.parse();
        };
      }
    };

    // Ensure FB SDK is loaded
    if (document.getElementById("facebook-jssdk")) {
      initializeFB();
    } else {
      // Load the SDK asynchronously
      (function (d, s, id) {
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          initializeFB();
          return;
        }
        const js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        if (fjs && fjs.parentNode) {
          fjs.parentNode.insertBefore(js, fjs);
        } else {
          d.head.appendChild(js);
        }
      })(document, "script", "facebook-jssdk");

      // Initialize after the SDK script has loaded
      window.fbAsyncInit = initializeFB;
    }
  }, []);

  return (
    <div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/profile.php?id=100054236000261&sk=reviews"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/profile.php?id=100054236000261&sk=reviews"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/profile.php?id=100054236000261&sk=reviews">
            Your Page Name
          </a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookPage;
