import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import { useSearch } from '../../hooks/useSearch';

const SubmitButton = ({ form, onSearch  }) => {
  const [submittable, setSubmittable] = React.useState(false);
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
  }, [values, form]);
  const handleSubmit = () => {
    form.validateFields().then(() => {
      if (typeof onSearch === 'function') {
        onSearch(values.buscar.query);
      }
    });
  };
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable} onClick={handleSubmit}>
      Buscar
    </Button>
  );
};

const Formu = ({ onSearch }) => {
  const [form] = Form.useForm();
  /*const handleSubmit = (values) => {
    console.log(values.buscar.query)
  };*/
  return (
    <Form
      form={form}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      /*onFinish={handleSubmit}*/
    >
      <Form.Item
        name={['buscar', 'query']}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Avengers ..." />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form}  onSearch={onSearch} />
          <Button htmlType="reset">Limpiar</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default Formu;
