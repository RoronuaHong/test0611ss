import type { TableRowSelection } from 'antd/es/table/interface';
import { App } from './App';

import './TreeNode.css'

// export interface DataType {
//   key: React.ReactNode;
//   name: string;
//   age: number;
//   address: string;
//   children?: DataType[] | null;
// }

export interface DataType {
  id: string;
  key: string;
  parentId: string;
  menuName: string;
  menuUrl: string | null;
  menuType: string;
  authCode: string;
  requestCode: string | null;
  children?: DataType[] | null;
}

// export const data: DataType[] = [
//   {
//     "key": "A_01",
//     "menuName": "demo01",
//     "id": "A_01",
//     "menuType": "01",
//     "parentId": "000000",
//     "menuUrl": "/portal-upm/home?tabTitle=abc",
//     "authCode": "home",
//     "requestCode": null,
//     "children": null
//   },
//   {
//     "key": "B_01",
//     "menuName": "demoB01",
//     "id": "B_01",
//     "menuType": "01",
//     "parentId": "000000",
//     "menuUrl": null,
//     "authCode": "managementPlatform-new",
//     "requestCode": null,
//     "children": [
//       {
//         "key": "B_01_01",
//         "menuName": "demoB0101",
//         "id": "B_01_01",
//         "menuType": "01",
//         "parentId": "B_01",
//         "menuUrl": null,
//         "authCode": "operation",
//         "requestCode": null,
//         "children": [
//           {
//             "key": "B_01_01_01",
//             "menuName": "demoB010101",
//             "id": "B_01_01_01",
//             "menuType": "01",
//             "parentId": "B_01_01",
//             "menuUrl": null,
//             "authCode": "manageTeam-new",
//             "requestCode": null,
//             "children": [
//               {
//                 "key": "B_01_01_01_01",
//                 "menuName": "demoB01010101",
//                 "id": "B_01_01_01_01",
//                 "menuType": "01",
//                 "parentId": "B_01_01_01",
//                 "menuUrl": null,
//                 "authCode": "managePlatform:dspCenter-new",
//                 "requestCode": null,
//                 "children": [
//                   {
//                     "key": "B_01_01_01_01_01",
//                     "menuName": "demoB0101010101",
//                     "id": "B_01_01_01_01_01",
//                     "menuType": "01",
//                     "parentId": "B_01_01_01_01",
//                     "menuUrl": "/portal-dsp/dsp_generalManagement",
//                     "authCode": "managePlatform:departmetAdmin-new",
//                     "requestCode": "/geteWay/icore-css.dspService/commonController/listUserDepartment",
//                     "children": null
//                   },
//                   {
//                     "key": "B_01_01_01_01_02",
//                     "menuName": "demoB0101010102",
//                     "id": "B_01_01_01_01_02",
//                     "menuType": "01",
//                     "parentId": "B_01_01_01_01",
//                     "menuUrl": "/portal-dsp/dsp_generalManagement",
//                     "authCode": "managePlatform:departmetAdmin-new",
//                     "requestCode": "/geteWay/icore-css.dspService/commonController/listUserDepartment",
//                     "children": null
//                   },
//                   {
//                     "key": "B_01_01_01_01_03",
//                     "menuName": "demoB0101010103",
//                     "id": "B_01_01_01_01_03",
//                     "menuType": "01",
//                     "parentId": "B_01_01_01_01",
//                     "menuUrl": "/portal-dsp/dsp_generalManagement",
//                     "authCode": "managePlatform:departmetAdmin-new",
//                     "requestCode": "/geteWay/icore-css.dspService/commonController/listUserDepartment",
//                     "children": null
//                   },
//                   {
//                     "key": "B_01_01_01_01_04",
//                     "menuName": "demoB0101010104",
//                     "id": "B_01_01_01_01_04",
//                     "menuType": "01",
//                     "parentId": "B_01_01_01_01",
//                     "menuUrl": "/portal-dsp/dsp_generalManagement",
//                     "authCode": "managePlatform:departmetAdmin-new",
//                     "requestCode": "/geteWay/icore-css.dspService/commonController/listUserDepartment",
//                     "children": null
//                   },
//                   {
//                     "key": "B_01_01_01_01_05",
//                     "menuName": "demoB0101010105",
//                     "id": "B_01_01_01_01_05",
//                     "menuType": "01",
//                     "parentId": "B_01_01_01_01",
//                     "menuUrl": "/portal-dsp/dsp_generalManagement",
//                     "authCode": "managePlatform:departmetAdmin-new",
//                     "requestCode": "/geteWay/icore-css.dspService/commonController/listUserDepartment",
//                     "children": null
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ]

// export const data: DataType[] = [
//   {
//     key: 1,
//     name: 'John Brown sr.',
//     age: 60,
//     address: 'New York No. 1 Lake Park',
//     children: [
//       {
//         key: 11,
//         name: 'John Brown',
//         age: 42,
//         address: 'New York No. 2 Lake Park',
//       },
//       {
//         key: 12,
//         name: 'John Brown jr.',
//         age: 30,
//         address: 'New York No. 3 Lake Park',
//         children: [
//           {
//             key: 121,
//             name: 'Jimmy Brown',
//             age: 16,
//             address: 'New York No. 3 Lake Park',
//             children: [
//               {
//                 key: 1231,
//                 name: 'Jimmy Brown1231',
//                 age: 21,
//                 address: 'New York No. 4 Lake Park',
//                 children: [
//                   {
//                     key: 12341,
//                     name: 'Jimmy Brown12341',
//                     age: 241,
//                     address: 'New York No. 5 Lake Park',
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         key: 13,
//         name: 'Jim Green sr.',
//         age: 72,
//         address: 'London No. 1 Lake Park',
//         children: [
//           {
//             key: 131,
//             name: 'Jim Green',
//             age: 42,
//             address: 'London No. 2 Lake Park',
//             children: [
//               {
//                 key: 1311,
//                 name: 'Jim Green jr.',
//                 age: 25,
//                 address: 'London No. 3 Lake Park',
//               },
//               {
//                 key: 1312,
//                 name: 'Jimmy Green sr.',
//                 age: 18,
//                 address: 'London No. 4 Lake Park',
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     key: 2,
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
// ];

// rowSelection objects indicates the need for row selection
export const rowSelection: TableRowSelection<DataType> = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default App;
