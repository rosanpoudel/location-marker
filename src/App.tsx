import React, { useEffect, useState } from "react";
import {
  TabWrapper,
  TabHead,
  TabLink,
  TabContents,
} from "./components/Tabs/styles";
import Tab1 from "./components/Tabs/Tab1";
import Tab2 from "./components/Tabs/Tab2";
import Tab3 from "./components/Tabs/Tab3";
import Icon1 from "./img/icon-1.svg";
import Icon2 from "./img/icon-2.svg";
import Icon3 from "./img/icon-3.svg";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [cordinates, setCoordinates] = useState([]);
  const [fetchCordinateLoading, setFetchCordinateLoading] = useState(false);
  const handleTabCahange = (index: number) => {
    setActiveTab(index);
  };

  const fetchCoordinates = async () => {
    setFetchCordinateLoading(true);
    const url =
      "https://angelswing-frontend-test-serverless-api.vercel.app/api/locations";
    const res = await fetch(url);
    const responseObject = await res.json();
    setCoordinates(responseObject?.locations);
    setFetchCordinateLoading(false);
  };

  useEffect(() => {
    fetchCoordinates();
  }, []);

  return (
    <div className="App">
      <TabWrapper>
        <TabHead>
          <div>
            <TabLink
              active={activeTab === 1}
              onClick={() => handleTabCahange(1)}
            >
              <img src={Icon1} alt="Navigation icon" />
            </TabLink>
            <TabLink
              active={activeTab === 2}
              onClick={() => handleTabCahange(2)}
            >
              <img src={Icon2} alt="Navigation icon" />
            </TabLink>
            <TabLink
              active={activeTab === 3}
              onClick={() => handleTabCahange(3)}
            >
              <img src={Icon3} alt="Navigation icon" />
            </TabLink>
          </div>
        </TabHead>
        <TabContents>
          {activeTab === 1 && (
            <Tab1
              cordinates={cordinates}
              fetchCordinateLoading={fetchCordinateLoading}
            />
          )}
          {activeTab === 2 && <Tab2 />}
          {activeTab === 3 && <Tab3 />}
        </TabContents>
      </TabWrapper>
    </div>
  );
}

export default App;
