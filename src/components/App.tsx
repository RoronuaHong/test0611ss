import { Table, Input, Layout, Col, Row, Modal, Form, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState, useEffect } from 'react';
import { data, DataType, rowSelection } from './TreeNode';
import SearchInput from './SearchInput';
import { FileAddOutlined, FormOutlined, DeleteOutlined, SolutionOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

export const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dataList, setDataList] = useState(data);
  const [checkStrictly, setCheckStrictly] = useState(false);

  const columns: ColumnsType<DataType> = [
    {
      title: '菜单ID',
      dataIndex: 'id',
      key: 'id',
      width: '20%',
    },
    {
      title: '菜单名称',
      dataIndex: 'menuName',
      key: 'menuName',
      width: '25%',
    },
    {
      title: '菜单类型',
      dataIndex: 'menuType',
      key: 'menuType',
      width: '12%',
    },
    {
      title: '编码资源',
      dataIndex: 'authCode',
      key: 'authCode',
      width: '30%',
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      width: '30%',
      render: (text, record) => (
        <div>
          <FileAddOutlined onClick={() => handleAdd(record)} style={{ color: '#08c', padding: '0 2px' }} />
          <FormOutlined onClick={() => handleEdit(record)} style={{ color: '#08c' }} />
          <SolutionOutlined onClick={() => handleRoleMgt(record)} style={{ color: '#08c' }} />
          <DeleteOutlined onClick={() => handleDelete(record)} style={{ color: '#c00' }} />
          {/* <div onClick={() => handleDelete(record)}>del</div> */}
          {/* <div onClick={() => handleEdit(record)}>edit</div> */}
        </div>
      ),
    }
  ];

  const addItemByKey = (dataList: DataType[], newItem: DataType, parentKey: number | string): DataType[] => {
    return dataList.map(item => {
      if (item.key === parentKey && item.children) {
        // 如果找到了指定的父项，并且该父项有子项，则在其子项中添加新项
        return {
          ...item,
          children: [...item.children, newItem],
        };
      } else if (item.key === parentKey && !item.children) {
        // 如果找到了指定的父项，并且该父项有子项，则在其子项中添加新项
        return {
          ...item,
          children: [newItem],
        };
      } else if (item.children) {
        console.log(2, item.children);
        // 如果当前项有子项，则递归调用以在子项中查找并添加新项
        return {
          ...item,
          children: addItemByKey(item.children, newItem, parentKey),
        };
      }
      return item;
    });
  };

  const deleteItemByKey = (dataList: DataType[], keyToDelete?: number | string): DataType[] => {
    return dataList.reduce((acc: DataType[], currentItem: DataType) => {
      if (currentItem.key === keyToDelete) {
        // 如果当前项的键与要删除的键相同，则不包含该项
        return acc;
      } else {
        if (currentItem.children) {
          // 如果当前项有子项，则递归调用以删除子项中的匹配项
          currentItem.children = deleteItemByKey(currentItem.children, keyToDelete);
        }
        // 保留当前项
        acc.push(currentItem);
        return acc;
      }
    }, []);
  };

  const handleAdd = (record: DataType) => {
    // 处理添加操作
    // 要添加的新项
    // const newItem: DataType = {
    //   key: 12333,
    //   name: 'Jane Doe123321',
    //   age: 28,
    //   address: 'Paris No. 1 Lake Park',
    // };

    const newItem: DataType = {
      "key": "A_01_03",
      "menuName": "demo01",
      "id": "A_01_03",
      "menuType": "01",
      "parentId": "000000",
      "menuUrl": "/portal-upm/home?tabTitle=abc",
      "authCode": "home",
      "requestCode": null,
      "children": null
    };

    const newData = addItemByKey(dataList, newItem, record.key as string);

    setDataList(newData);
  };

  const handleDelete = (record: DataType) => {
    // 处理删除操作
    const data = deleteItemByKey(dataList, record.key as string);

    setDataList(data);
  };

  const handleEdit = (record: DataType) => {
    // 处理编辑操作
    console.log(record);
  };

  const handleRoleMgt = (record: DataType) => {
    // 处理
    console.log('角色授权弹窗')
    setVisible(true)
  }

  const handleOk = () => {
    // 处理表单提交逻辑
    setVisible(false);
  };

  const handleCancel = () => {
    // 处理取消按钮逻辑
    setVisible(false);
  };

  const add = () => {
    console.log(123321)
  }

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <>
      <Layout>
        <Header className="layout-container">
          <Row>
            <Col span={6}>
              <SearchInput setDataList={setDataList} />
            </Col>
          </Row>
        </Header>
        <Content>
          <Table
            columns={columns}
            rowSelection={{ ...rowSelection, checkStrictly }}
            dataSource={dataList} />
            
        </Content>
        <Footer>
          <div>
            新增 / 编辑
            <Form>
              <Form.Item label="父级菜单ID" rules={[{ required: true, message: '请输入父级菜单ID' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="菜单ID" rules={[{ required: true, message: '请输入菜单ID' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="菜单名称" rules={[{ required: true, message: '请输入菜单名称' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="菜单类型" rules={[{ required: true, message: '请输入菜单类型' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="资源编码" rules={[{ required: true, message: '请输入资源编码' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="前端路由" rules={[{ required: true, message: '请输入前端路由' }]}>
                <Input />
              </Form.Item>
              <Form.List name="names" initialValue={['']}>
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        label={index === 0 ? '资源URI' : ''}
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={['onChange', 'onBlur']}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "请输入资源URI",
                            },
                          ]}
                          noStyle
                        >
                          <Input placeholder="请输入资源URI" style={{ width: '70%' }} />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: '60%' }}
                        icon={<PlusOutlined />}
                      >
                        新增资源URI
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form>
              {/* <Form.Item label="资源URI" rules={[{ required: true, message: '请输入资源URI' }]}>
                <Input />
              </Form.Item> */}
            <Form name="dynamic_form_item" onFinish={onFinish}>
            </Form>
          </div>
          <div>
            角色授权弹窗
            <Row>
              <Col span={6}>
                <SearchInput setDataList={setDataList} />
              </Col>
            </Row>
            <Form>
              <Form.Item label="用户名">
                <Input />
              </Form.Item>
              <Form.Item label="密码">
                <Input.Password />
              </Form.Item>
            </Form>
          </div>
          {/* <Modal
            title="表单弹窗"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
           /> */}
            {/* <Form>
              <Form.Item label="用户名">
                <Input />
              </Form.Item>
              <Form.Item label="密码">
                <Input.Password />
              </Form.Item>
            </Form> */}
          {/* </Modal> */}
        </Footer>
      </Layout>
    </>
  );
};
