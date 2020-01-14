import openNotification from '../components/openNotification'
import {Icon} from 'antd'
import React from 'react'
export const DELETE_SV = 'DELETE_SV';
export const ADD_SV = "ADD_SV";
export const UPDATE_SV= "UPDATE_SV";

const deleteSinhVien = (MaSV, state) => {
    const updateState = [...state.dssv];
    const index = updateState.findIndex(e => e.MaSV=== MaSV);
    updateState.splice(index,1);
    return {dssv: updateState};
};
const updateSinhVien = (user, state) => {
    const updateState = [...state.dssv];
    const index = updateState.findIndex(e => e.MaSV === user.MaSV);
    if((!(updateState[index] === user)))
    {
        openNotification(<Icon type="check" style={{color:"green", paddingTop:12, fontSize:16}} /> ,
        <span style={{color: "green"}}>Success</span>,
        <span style={{color: "green"}}>Sửa thành công</span>,
        {borderLeft:"solid 5px green"},
        'success');
    }
    updateState[index] = user;
    return {dssv: updateState};
}
const addSinhVien = (user, state) => {
    const dssv1 = [...state.dssv];
    const dssv2 = [];
    dssv1.map( i => {
        dssv2.push( i.MaSV);
    })
    if(dssv2.indexOf(user.MaSV) === -1)
        {
            const updateState = [...state.dssv, user];
            openNotification(<Icon type="check" style={{color:"green", paddingTop:12, fontSize:16}} /> ,
            <span style={{color: "green"}}>Success</span>,
            <span style={{color: "green"}}>Thêm thành công</span>,
            {borderLeft:"solid 5px green"},
            'success');
            document.querySelector(".form-add").reset();
            return {dssv: updateState};
        }
    else
    {
        openNotification(<Icon type="close" style={{color:"#FF335B", paddingTop:12, fontSize:16}} /> ,
        <span style={{color: "#FF3333"}}>Failed</span>,
        <span style={{color: "#FF335B"}}>Trùng mã số</span>,
        {borderLeft:"solid 5px #FF335B"},
        'error');
        return {dssv: dssv1}
    }
}


export const shopReducer = (state, action) => {
  switch (action.type) {
    case DELETE_SV:
      return deleteSinhVien(action.sv, state);
    case ADD_SV:
        return addSinhVien(action.user,state);
    case UPDATE_SV:
        return updateSinhVien(action.sv,state);
    default:
      return state;
  }
};
