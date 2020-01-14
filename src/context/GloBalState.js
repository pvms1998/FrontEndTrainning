import React, { useState, useReducer } from 'react';

import SVContext from './sv-context';
import { shopReducer, DELETE_SV, ADD_SV, UPDATE_SV } from './reducer';

const GlobalState = props => {
    const dssv = [  
        {MaSV: '1660340', HoTen: 'Phạm Văn Mạnh', Tuoi: '1998', Email: 'vanmanhdp1@gmail.com'},
        {MaSV: '1663072', HoTen: 'Nguyễn Hữu Nghĩa', Tuoi: '1998', Email: 'nghia@gmail.com'},
        {MaSV: '1660220', HoTen: 'Tô Thị Xuân Hồng', Tuoi: '1997', Email: 'hong@gmail.com'}
    ];
    const [dssvtState, dispatch] = useReducer(shopReducer, {dssv});
    const deleteSV = sv => {
        setTimeout(() => {
        dispatch({ type: DELETE_SV, sv: sv });
        }, 400);
    };
    const addSV = user => {
        setTimeout(() => {
            dispatch({ type: ADD_SV, user: user });
            }, 200);
    };
    const updateSV = sv => {
      setTimeout(() => {
        dispatch({ type: UPDATE_SV, sv: sv});
        }, 200);
    }

  return (
    <SVContext.Provider
      value={{
        dssv: dssvtState.dssv,
        deleteSV: deleteSV,
        addSV: addSV,
        updateSV: updateSV
      }}
    >
      {props.children}
    </SVContext.Provider>
  );
};

export default GlobalState;
