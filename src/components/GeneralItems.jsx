import React, { } from 'react';
import { Modal, Button } from 'antd';

const GeneralItems = () => {
  const deleteQuestion = () => {

  };
    state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };
  return(
    <div>
      <Button type="primary" onClick={this.showModal}>
        Open Modal with async logic
        </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
      >
        <p>{ModalText}</p>
      </Modal>
    </div>
  )
};

export default GeneralItems
