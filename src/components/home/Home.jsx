import React from "react";
import "./style.css";
import { Button, Col, Form, Row, Select, Switch } from "antd";
import { useWatch } from "antd/es/form/Form";

const Home = () => {
  const { form } = Form.useForm();

  const options = [
    {
      label: "Web",
      value: "web",
    },
    {
      label: "Data",
      value: "data",
    },
  ];

  const onChange = (value) => {
    console.log(value);
  };

  return (
    <div className="home">
      <h3>Добро пожаловать</h3>
      <Form
        className="form"
        form={form}
        onValuesChange={(_, values) => {
          console.log(_);
          console.log(values);
        }}
      >
        <h4>Выберите подгруппу по английскому языку </h4>
        <Form.Item name="switch1">
          <Row align={"middle"} justify={"space-between"}>
            <Col>
              <h4>Подгруппа 1</h4>
            </Col>
            <Col>
              <Switch defaultChecked={false} />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item name="switch2">
          <Row align={"middle"} justify={"space-between"}>
            <Col>
              <h4>Подгруппа 2</h4>
            </Col>
            <Col>
              <Switch defaultChecked={false} />
            </Col>
          </Row>
        </Form.Item>

        <Row align={"middle"} justify={"space-between"}>
          <Col span={20}>
            <h4>Подгруппа 3</h4>
          </Col>
          <Col>
            <Form.Item name="switch3">
              <Switch defaultChecked={false} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="switch4">
          <Row align={"middle"} justify={"space-between"}>
            <Col>
              <h4>Подгруппа 4</h4>
            </Col>
            <Col>
              <Switch defaultChecked={false} />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          className="last-form-item"
          name="select"
          label={<h3 className="select-direction">Выберете направление</h3>}
          labelAlign={"left"}
        >
          <Select options={options} defaultValue={"web"} onChange={onChange} />
        </Form.Item>

        <Button className="button-continue" type={"primary"}>
          Продолжить
        </Button>
      </Form>
    </div>
  );
};

export default Home;
