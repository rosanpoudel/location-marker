import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  .item {
    border-bottom: 1px solid #f4f4f4;
    padding: 18px 30px;
  }
`;

const LocationsLoadingSkeleton = () => {
  return (
    <SkeletonWrapper>
      {Array(3)
        .fill(3)
        ?.map(() => (
          <div className="item">
            <Skeleton
              height={25}
              width="80%"
              style={{ marginBottom: "22px" }}
            />
            <Skeleton count={2} height={20} style={{ marginBottom: "3px" }} />
          </div>
        ))}
    </SkeletonWrapper>
  );
};

export default LocationsLoadingSkeleton;
