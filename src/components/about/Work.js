import React from "react";
import '../about/styles/work.css';  // Import the CSS file

function Work({ position, company, location, type, duration }) {
  return (
    <article className="article">
      <div className="flex justify-between items-center">
        <h1 className="text-content">{position}</h1>
        <div className="btn">
          {type}
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col">
          <div className="flex items-center pr-5">
            <svg
              className="icon"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665 2.5H5.99998V3.5H4.66665V2.5ZM7.33331 2.5H8.66665V3.5H7.33331V2.5ZM9.99998 2.5H11.3333V3.5H9.99998V2.5ZM4.66665 4.5H5.99998V5.5H4.66665V4.5ZM7.33331 4.5H8.66665V5.5H7.33331V4.5ZM9.99998 4.5H11.3333V5.5H9.99998V4.5ZM4.66665 6.5H5.99998V7.5H4.66665V6.5ZM7.33331 6.5H8.66665V7.5H7.33331V6.5ZM9.99998 6.5H11.3333V7.5H9.99998V6.5ZM4.66665 8.5H5.99998V9.5H4.66665V8.5ZM9.99998 8.5H11.3333V9.5H9.99998V8.5Z" />
            </svg>
            <p className="text-content pl-1">{company}</p>
          </div>
          <div className="flex items-center">
            <svg
              className="icon"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M8 6.75C7.50555 6.75 7.0222 6.64003 6.61108 6.43401C6.19995 6.22798 5.87952 5.93514 5.6903 5.59253C5.50108 5.24992 5.45157 4.87292 5.54804 4.50921C5.6445 4.14549 5.8826 3.8114 6.23223 3.54918C6.58187 3.28695 7.02732 3.10838 7.51228 3.03603C7.99723 2.96368 8.4999 3.00081 8.95671 3.14273C9.41353 3.28464 9.80397 3.52496 10.0787 3.83331C10.3534 4.14165 10.5 4.50416 10.5 4.875C10.4992 5.3721 10.2356 5.84867 9.76689 6.20017C9.29822 6.55167 8.6628 6.74941 8 6.75ZM8 3.75C7.70333 3.75 7.41332 3.81598 7.16665 3.9396C6.91997 4.06321 6.72771 4.23892 6.61418 4.44448C6.50065 4.65005 6.47095 4.87625 6.52882 5.09448C6.5867 5.31271 6.72956 5.51316 6.93934 5.6705C7.14912 5.82783 7.41639 5.93498 7.70737 5.97838C7.99834 6.02179 8.29994 5.99951 8.57403 5.91437C8.84812 5.82922 9.08238 5.68502 9.24721 5.50002C9.41203 5.31501 9.5 5.09751 9.5 4.875C9.4996 4.57672 9.34144 4.29075 9.06022 4.07983C8.779 3.86892 8.3977 3.7503 8 3.75Z" />
            </svg>
            <p className="text-content pl-1">{location}</p>
          </div>
        </div>
        <p className="text-content min-w-fit">{duration}</p>
      </div>
    </article>
  );
}

export default Work;
