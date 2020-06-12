import React, { useState } from 'react';
import 'antd/dist/antd.css'; 
import { DeleteOutlined, CloseOutlined } from '@ant-design/icons';
import { Select } from 'antd';

const { Option } = Select;

const GeneralItems = ({ setModalView, index, setIdDeleteItem}) => {

  const [option, setOption] = useState({ value: '', items: ['Text', "Checkbox", "Radio", "Description"], });

  const changeValue = (value, index) => {
    setOption(prev => ({ ...prev, value: value }));
  };

  return(
    <div>
      <div>
        <Select value={option.value} style={{ width: 150 }} onChange={changeValue}>
        {option.items.map((option, i) => {
          return <Option key={i} value={i}>{option} </Option>
        })}
      </Select>
        
      </div>
      <DeleteOutlined 
        style={{ fontSize: '24px' }} 
        onClick={() => {
          setIdDeleteItem(index)
          setModalView(true)
        }}
      />
    </div>
  )
};

export default GeneralItems
