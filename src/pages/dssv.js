import { Table, Divider, Tag, Icon, Button} from 'antd'
import React, {Component, useState} from 'react'
import SinhVien from './sinhvien'
import DrawerShow from './formNhap'
import SVContext from '../context/sv-context'
import '../App.css';
 function Dssv() {
    const [visible, setVisible] = useState(false);
    function handleOnClose(){
        setVisible(false);
        document.querySelector(".form-add").reset();
    }
    return(
        <SVContext.Consumer>
            { context => (
                <React.Fragment>
                <h1 className="display-4 text-center">Quản lý Sinh Viên</h1>
                <div className="container-fluid">
                    <Button className="add" style={{backgroundColor: "#3393FF", borderColor:"#3393FF", float: "right"}}
                        onClick = {() => setVisible(true)} > 
                        <Icon className="iconadd" type="plus" />
                    </Button>
                    <DrawerShow visible={visible} onClose={handleOnClose} 
                                context = {context} />
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã sinh viên</th>
                                <th>Họ tên</th>
                                <th>Tuổi</th>
                                <th>Email</th>
                                <th>Hành động</th>
                            </tr>    
                        </thead>
                        <tbody>
                            {context.dssv.map((sv, index) => <SinhVien sv = {sv} 
                                            key={index} context = {context} index = {index} />)}
                        </tbody>
                    </table>
                </div>
                </React.Fragment>
             )}
        </SVContext.Consumer>
    );
};
export default Dssv