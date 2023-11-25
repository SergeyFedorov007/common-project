import {useEffect} from "react"
import { Button, Col, Form, Row, Select, Switch } from "antd"
import {optionsForHomeSelect, preparedFormItems} from "./constants"
import {UsergroupAddOutlined} from "@ant-design/icons"

import "./style.css"


const Home = () => {
  const [ form ] = Form.useForm()

    useEffect(() => {
        form.setFieldsValue({
            switch1: false,
            switch2: false,
            switch3: false,
            switch4: false,
            select: 'web'
        })
    }, []);

    console.log(form)
    const getFields = async () => {
        const values = await form.validateFields()
        return values
    }

  return (
    <div className="home">
      <h3>Добро пожаловать</h3>
      <Form
        className="form"
        form={form}
      >
        <h4>Выберите подгруппу по английскому языку </h4>
        {
          preparedFormItems.map((item) => {
            return  <Row align={"middle"} justify={"space-between"} key={item.name}>
              <Col span={16}>
                <h4><UsergroupAddOutlined />{' ' + item.label}</h4>
              </Col>
              <Col>
                <Form.Item name={item.name}>
                  <Switch defaultChecked={false} />
                </Form.Item>
              </Col>
            </Row>
          })
        }

        <Form.Item
          className="last-form-item"
          name="select"
          label={<h3 className="select-direction">Выберете направление</h3>}
          labelAlign={"left"}
        >
          <Select options={optionsForHomeSelect} defaultValue={"web"} />
        </Form.Item>

        <Button className="button-continue" type={"primary"} onClick={() => {
            getFields().then(data => {
                console.log(data)
            })
        }}>
          Продолжить
        </Button>
      </Form>
    </div>
  )
}

export default Home
