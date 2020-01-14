import React from 'react';

export default React.createContext({
  dssv: [],
  addSV: user => {},
  deleteSV: sv => {},
  updateSV: sv => {}
});
