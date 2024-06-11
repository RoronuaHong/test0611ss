import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { DataType } from './TreeNode';
import { Input } from 'antd';
import axios from 'axios';
import mock_json from './mock2.json';

const SearchInput: React.FC<{ setDataList: Dispatch<SetStateAction<DataType[]>> }> = (props: any) => {
  const { setDataList } = props
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

    setDataList(mockData.data);

    console.log(mockData)
  }, [searchText]);
 
  const onSearch = (value: string) => {
    setSearchText(value);
  };

  return (
    <Input.Search
      placeholder="请输入搜索内容"
      onSearch={onSearch}
      allowClear
    />
  );
};

export default SearchInput;
