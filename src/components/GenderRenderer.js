// import React from 'react';

// export const GenderRenderer = (props) => {
//   //   const image = props.value === 'Male' ? 'male.png' : 'female.png';
//   //   const imageSource = `https://www.ag-grid.com/example-assets/genders/${image}`;
//   return <span>{props.value}</span>;
// };
import React from 'react';

const GenderRenderer = (props) => {
  return <span>{props.value}</span>;
};

export default GenderRenderer;
