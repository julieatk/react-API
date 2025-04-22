import React from 'react';

const Colors = ({ data }) => {
  return (
    <>
      {
        //map over array to display each color
        data && data.map((d) => (
            //create card for each color item with key
          <div className="card" key={d.id} style={{ background:d.color}}>
            <div className="container">
                {/* changed styling here */}
              <h4 style={{ color: 'white' }}><b>{d.name}</b></h4>
              <p style={{ color: 'white' }}>{d.color}</p>
            </div>
          </div>
        ))
    
      }
    </>
  );
};

export default Colors;
