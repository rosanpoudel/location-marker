import styled from "styled-components";
import FlagIcon from "../../img/flag-icon.svg";

const ItemWrapper = styled.div`
  padding: 18px 30px;
  border-bottom: 1px solid #f4f4f4;

  .location-title {
    margin-bottom: 22px;
    font-size: 15px;
    font-weight: 400;
    color: #4d4c4c;
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
  .cordinate-value {
    .value-row {
      display: flex;
      align-items: center;
      margin-bottom: 3px;
      &:last-child {
        margin-bottom: 0;
      }

      span {
        font-size: 13px;
        font-weight: 700;
        color: #4d4c4c;
        width: 15%;
      }
      p {
        padding: 8px 30px 8px 8px;
        color: #2b4877;
        font-size: 18px;
        font-weight: 500;
        width: 46%;
        border: 1px solid #c7c7c7;
        border-radius: 5px;
      }
    }
  }
`;

interface ItemProps {
  cordinate: any;
  index: number;
}

const LocationItem = ({ cordinate, index }: ItemProps) => {
  return (
    <ItemWrapper>
      <h3 className="location-title">
        <img src={FlagIcon} alt="Flag Icon" />
        Location {index + 1}
      </h3>
      <div className="cordinate-value">
        <div className="value-row">
          <span>Lat</span>
          <p>{cordinate[0]}</p>
        </div>
        <div className="value-row">
          <span>Long</span>
          <p>{cordinate[1]}</p>
        </div>
      </div>
    </ItemWrapper>
  );
};

export default LocationItem;
