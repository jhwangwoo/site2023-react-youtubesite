// import React from 'react';

// const Loader = () => {
//     return (
//         <svg
//             class="spinner"
//             width="65px"
//             height="65px"
//             viewBox="0 0 66 66"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <circle
//                 class="path"
//                 fill="none"
//                 stroke-width="6"
//                 stroke-linecap="round"
//                 cx="33"
//                 cy="33"
//                 r="30"
//             ></circle>
//         </svg>
//     );
// };

// export default Loader;
import React from 'react';
const Loader = () => {
    return (
        <div className="l-wrapper">
            <svg
                viewBox="0 0 120 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <symbol id="s--circle">
                    <circle r="10" cx="20" cy="20"></circle>
                </symbol>
                <g className="g-circles g-circles--v1">
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle" />
                    </g>
                </g>
            </svg>
        </div>
    );
};
export default Loader;
