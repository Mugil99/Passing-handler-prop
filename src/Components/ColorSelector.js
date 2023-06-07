import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background, classname, label } = config;
  console.log(background,classname,label);
  return (
    <button className={classname} onClick={() => selectNextBackground({background: background})}>
      {label}
    </button>
    
  )
}
export default ColourSelector;