import bird from "./mcgill.png";
import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <svg
        width="90px"
        height="90px"
        viewBox="0 0 17 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="si-glyph si-glyph-lamp-desk"
      >
        <title>631</title>

        <defs></defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(3.000000, 0.000000)" fill="#434343">
            <path
              d="M10.521,7.989 C10.263,7.989 10.024,8.061 9.813,8.179 L8.272,5.586 L8.648,5.245 L7.069,3.502 L6.062,5.307 L7.197,6.561 L7.555,6.236 L9.162,8.896 C9.086,9.079 9.041,9.279 9.041,9.49 C9.041,9.864 9.181,10.202 9.405,10.465 L8.176,14.394 C7.506,14.166 6.792,14.033 6.039,14.033 C3.319,14.033 1.001,13.658 0.065,15.949 L12.011,15.949 C11.467,14.619 10.449,15.526 9.168,14.833 L10.358,10.974 C10.411,10.98 10.462,10.991 10.518,10.991 C10.728,10.991 10.927,10.945 11.108,10.865 C11.411,10.731 11.656,10.495 11.812,10.203 C11.927,9.991 11.998,9.751 11.998,9.492 C12,8.661 11.337,7.989 10.521,7.989 L10.521,7.989 Z"
              class="si-glyph-fill"
            ></path>
            <path
              d="M7.133,1.966 L5.346,-0.009 L0.113,2.266 L4.354,6.95 L7.133,1.966 Z"
              class="si-glyph-fill"
            ></path>
            <path
              d="M1.473,5.323 C2.472,6.427 3.355,5.793 3.355,5.793 L1.177,3.386 C1.177,3.386 0.471,4.219 1.473,5.323 L1.473,5.323 Z"
              class="si-glyph-fill"
            ></path>
          </g>
        </g>
      </svg>
      <img src={bird} alt="Overlay Image" className="overlay-image" />
    </div>
  );
};

export default Logo;