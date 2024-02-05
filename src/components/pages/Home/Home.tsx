import styles from "./Home.module.scss"
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Space, Table, TableProps, Tag } from 'antd';
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ModelCustom from "~/components/common/ModelCustom";
import { QUERY_KEY } from "~/constants/config/enum";
import { httpRequest } from "~/services";
import crmPatientService from "~/services/core/test";
function Home() {
    const [dataSource, setDataSource] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const queryClient = useQueryClient();
    
    const {_gender, _national, _province, _district, _ward, _keyword, page, PageSize,count, _birthYear} = router.query;
    const [limit, setLimit] = useState<number>(10);
	 // const [page, setPage] = useState<number>(1);
     const onFinish = (values: any) => {
        console.log('Received values of form:', values);
      };
      const columns = [
        {
          title: "Tên bệnh nhân",
          dataIndex: "contact",
          render: (_:any, {contact}: any)  => {
            return <>{contact.fullName}</>
          }
        },
        {
          title: "email",
          dataIndex: "contact",
          render: (_:any, {contact}: any)  => {
            return <>{contact.email}</>
          }
        }
      ];
      useEffect(() => {
        //fetchRecords(1);
        
      }, []);
      const fetchRecords = (page: number) => {
        axios
          .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
          .then((res) => {
            setDataSource(res.data.data);
            setTotalPages(res.data.totalPages);
            setLoading(false);
          });
      };
      const fetchTable = (page: number)=>{
        router.replace(
          {
            pathname:
              router.pathname,
            query: {
              ...router.query,
              page: page,
            },
          },
          undefined,
          {
            shallow: true,
            scroll: false,
          }
        );
        queryClient.invalidateQueries([QUERY_KEY.ListPatient]);
      }
      
    
      useQuery(
        [QUERY_KEY.ListPatient],
        {
          queryFn: () =>
            httpRequest({
              http: crmPatientService.getListPatientFromHis({
                hospitalId: '65952caa182a0fc554696e54',
                keySearch: '',
                paging: {
                  count: Number(count) || 20,
                  from: Number(PageSize || 50) * (Number(page || 1) - 1),
                },
                birthYear:  null,
                email: null,
                phoneNumber: null,
                nation: null,
                province:null,
                district: null,
                ward: null,
              }),
            }),
            onSuccess(data) {
              console.log(data)
              setDataSource(data.list);
              setTotalPages(data.count);
            },
        }
      );
    return (<div  className={styles.main}>
       <Form
    name="dynamic_form_nest_item"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    autoComplete="off"
  >
    <Form.List name="users">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
              <Form.Item
                {...restField}
                name={[name, 'first']}
                rules={[{ required: true, message: 'Missing first name' }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'last']}
                rules={[{ required: true, message: 'Missing last name' }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: Number(limit),
          total: totalPages,
          onChange: (page) => {
            fetchTable(page+1);
          },
        }}
      ></Table>
      <ModelCustom></ModelCustom>
    </div>);
}

export default Home;