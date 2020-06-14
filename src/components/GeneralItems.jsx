import React, {} from 'react';
import 'antd/dist/antd.css'; 
import { DeleteOutlined} from '@ant-design/icons';

const GeneralItems = ({ setModalView, index, setIdDeleteItem}) => {
  return(
    <div>
      <div>
        
        
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
