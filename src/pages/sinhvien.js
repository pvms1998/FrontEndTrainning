import React, {useEffect, useContext, useState} from 'react'
import SVContext from '../context/sv-context'
import { Button, Drawer } from 'antd';
import DrawerShow1 from './formEdit'


function Sinhvien(props){
    let {MaSV,HoTen,Tuoi,Email} = props.sv;
    const context = useContext(SVContext);
    useEffect(() => {
        console.log(context);
      }, []);
    const [visible, setVisible] = useState(false)
    function handleOnClose(){
        setVisible(false);
    }
   function handleSubmit(){
        setVisible(true);
   }
    return (
        <tr>
            <td>{MaSV}</td>
            <td> {HoTen}</td>
            <td>{Tuoi}</td>
            <td>{Email}</td>
            <td>
                <Button type="danger"
                onClick={context.deleteSV.bind(this,MaSV)}
                >Delete</Button> <span />
                <Button type="primary"
                onClick = {handleSubmit}
                >Edit</Button>
            </td>
        <div>
           <DrawerShow1 visible={visible} onClose={handleOnClose} sv={props.sv} context={context} />
        </div>
        </tr>
    );
}

export default (Sinhvien);