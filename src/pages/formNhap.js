import React, { Component, useContext } from 'react'
import { Form,Drawer,Button, Input } from 'antd';
class fromNhap extends Component {
    constructor(props){
        super(props);
        this.state = {
            MaSV: '',
            HoTen: '',
            Tuoi: 0,
            Email: ''
        }
        console.log(props);
    }
    handleOnchange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render(){
        return(
        <div>
            <Drawer
                title= {'Thêm sinh viên'}
                width={520}
                onClose={ this.props.onClose}
                visible={this.props.visible}
                >
                <Form className="form-add">
                    <div className="form-group">
                        <label>Mã SV: </label>
                        <input type="text" className="form-control" name="MaSV" onChange={this.handleOnchange}>  
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Họ Tên: </label>
                        <input type="text" className="form-control" name="HoTen" onChange={this.handleOnchange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Tuổi: </label>
                        <input type="text" className="form-control" name="Tuoi" onChange={this.handleOnchange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" className="form-control" name="Email" onChange={this.handleOnchange}>        
                        </input>
                    </div>
                <div
                    style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e8e8e8',
                    padding: '10px 16px',
                    textAlign: 'right',
                    left: 0,
                    background: '#313132',
                    borderRadius: '0 0 4px 4px',
                    }}
                >
                    <Button
                    style={{
                        marginRight: 8,
                    }}
                    onClick={ this.props.onClose}
                    >
                    Cancel
                    </Button>

                    <Button type="primary"
                        onClick ={this.props.context.addSV.bind(this,this.state)}
                    >
                    Add
                    </Button>
            </div>
                </Form>
            </Drawer>
        </div>
        );
    }
}
export default Form.create({ name: 'horizontal_login' }) (fromNhap);