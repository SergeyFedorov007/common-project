import { useEffect, useState, useContext } from "react";
import { Button, Col, Form, Row, Select, Switch } from "antd";
import { optionsForHomeSelect, preparedFormItems } from "./constants"
import { UsergroupAddOutlined } from "@ant-design/icons"
import scheduleService from "../services/schedule"
import ScheduleContext from "../../ScheduleContext/ScheduleContext"

import "./style.css"



const Home = () => {
  const schedule = useContext(ScheduleContext)
  const [webDevelop, setWebDevelop] = useState("")
  const [dataScience, setDataScience] = useState("")

  const [form] = Form.useForm()

  useEffect(() => {

    form.setFieldsValue({
      switch1: false,
      switch2: false,
      switch3: false,
      switch4: false,
    });
  }, []);


  const getFields = async () => {
    const values = await form.validateFields();
    return {
      ...values,
      select: webDevelop + dataScience
    }
  }


  const getFirstDateAndSecondDate = () => {
    let currentDate = Math.floor(new Date().getTime() / 1000)
    return {
      firstDate: currentDate,
      secondDate: currentDate + 5 * 24 * 60 * 60
    }
  }

  console.log(schedule.schedules)

  return (
    <div className="home">
      <h3 className="welcome">Добро пожаловать</h3>
      <Form className="form" form={form}>
        <h4>Выберите подгруппу по английскому языку </h4>
        <div className="switch-container">
          {preparedFormItems.map((item) => {
            return (
              <Row
                align={"middle"}
                justify={"space-between"}
                key={item.name}
                className="form-item-row"
              >
                <Col span={16}>
                  <h4>
                    <UsergroupAddOutlined />
                    {" " + item.label}
                  </h4>
                </Col>
                <Col>
                  <Form.Item name={item.name}>
                    <Switch defaultChecked={false} />
                  </Form.Item>
                </Col>
              </Row>
            );
          })}
        </div>

       <h3 className="select-direction">Выберете направление</h3>
        <div className="last-form-item">
          <Button className={'button1 ' + (!!webDevelop ? 'active' : '')} onClick={() => {
            setDataScience('')
            setWebDevelop("Web-develop")}}>Web-разработка</Button>
          <Button className={'button2 ' + (!!dataScience ? 'active' : '')} onClick={() => {
            setWebDevelop('')
            setDataScience("DataScience")}}>Наука о данных</Button>
        </div>
        <div>
          <Button
            className="button-continue"
            type={"primary"}
            onClick={async () => {
             const data =  await scheduleService.getSchedule(getFirstDateAndSecondDate().firstDate, getFirstDateAndSecondDate().secondDate)
              schedule.setSchedules(data)
              //getFields().then((data) => {
                //console.log(data);
              //});
            }}
          >
            Продолжить
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Home;
