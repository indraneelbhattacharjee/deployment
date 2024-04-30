import BigChartBox from "./emsFiles/bigChartBox/BigChartBox";
import ChartBox from "./emsFiles/chartBox/ChartBox";
import TopBox from "./emsFiles/topBox/TopBox";
import { chartBoxConversion, chartBoxProduct, chartBoxUser } from "./emsFiles/data";
import { SideNavDark } from "./sideNavDark";

import "./emsFiles/ems.scss";
import React from 'react';
export const EMS = (props: any) => {
  return (
    <div className="home">
      <div className="box1">
        <SideNavDark />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxConversion} />
      </div>
      
      <div className="box box4">git 
        <BigChartBox />
      </div>

      <div className="box box5">
        <TopBox />
      </div>
      

    </div>
  );
};

export default EMS;
