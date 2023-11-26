import { URL_API } from "../../../config/apiRoute";
import { notification } from "antd";
import * as React from "react";

class ScheduleService {
  async getSchedule(firstData, secondData) {
    try {
      const requestUrl = `${URL_API}Schedule?firstDate=${firstData}&secondDate=${secondData}`;
      const response = await fetch(requestUrl);

      return response;
    } catch (err) {
      console.log(err)
      notification.error({ message: "Something wrong", description: "http://deltoserver.ddns.net:8080/api/Schedule?firstDate=1701021688&secondDate=1701453688 CORS policy: No 'Access-Control-Allow-Origin' " });
    }
  }
}

export default new ScheduleService();
