import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { DataType } from './TreeNode';
import { Input } from 'antd';
import axios from 'axios';
import mock_json from './mock.json';

const SearchInput: React.FC<{ setDataList: Dispatch<SetStateAction<DataType[]>> }> = () => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const mockData = mock_json
    // 当搜索文本变化时，执行搜索逻辑
    console.log('搜索内容变化了，当前搜索文本：', searchText);

    // axios.get('./mock.json')
    //   .then(response => {
    //     setData(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data: ', error);
    //   });
    console.log(mockData)
  }, [searchText]);
 
  const onSearch = (value: string) => {
    setSearchText(value);
  };

  return (
    <Input.Search
      placeholder="请输入角色名或者角色编码搜索"
      onSearch={onSearch}
      allowClear
    />
  );
};

export default SearchInput;
