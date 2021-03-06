import React from "react";
import LocationItem from "../../LocationItem";
import MapWrapper from "../../Map";
import { ContentWrapper } from "./styles";
import LocationLoadingSkeleton from "../../LoadingSkeleton";

interface Tab1Props {
  cordinates: Array<String>;
  fetchCordinateLoading: boolean;
}

const Tab1: React.FC<Tab1Props> = ({ cordinates, fetchCordinateLoading }) => {
  return (
    <ContentWrapper>
      {/* cordinates */}
      <div className="coordinates">
        {fetchCordinateLoading ? (
          <LocationLoadingSkeleton />
        ) : (
          <>
            {cordinates?.map((cordinate, index) => (
              <LocationItem key={index} cordinate={cordinate} index={index} />
            ))}
          </>
        )}
      </div>
      {/* map */}
      <div className="map-outer">
        <MapWrapper cordinates={cordinates} />
      </div>
    </ContentWrapper>
  );
};

export default Tab1;
