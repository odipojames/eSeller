import styled from "styled-components";
const Container = styled.div`
  .container {
    width: 1200px;
  }
  .Header {
    height: 28px;
    left: 0%;
    right: 0%;
    top: calc(50% - 28px / 2);
    margin-left: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: ${(props) => props.theme.blackText};
  }
  .list_items {
    width: 792px;
    height: 481px;
    padding: 20px 40px;
    left: 120px;
    top: 268px;
    background: ${(props) => props.theme.textColor};
    margin-right: 20px;
  }
  .offer_section {
    width: 384px;
    height: 320px;
    left: 936px;
    top: 268px;
    background: ${(props) => props.theme.textColor};
    background-image: url(offer.png);
  }
  .items_header {
    height: 16px;
    color: ${(props) => props.theme.whishlistColor};
  }
  hr {
    left: 3.73%;
    right: 3.72%;
    top: 15.8%;
    bottom: 83.78%;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
  .image__section {
    width: 91px;
    height: 80px;
    opacity: 0.25;
    border: 1px solid ${(props) => props.theme.hrColor};
    text-align: center;
    img {
      width: 70px;
      height: 60px;
    }
  }
  .price {
    height: 19px;
    left: 15.71%;
    right: 69.26%;
    top: calc(50% - 19px / 2 + 39px);
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.285714px;
    color: ${(props) => props.theme.blackText};
  }
  .Description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 500;
    font-size: 16px;
    overflow: hidden;
    height: 45px;
    width: 331px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.blackText};
  }
  .addToCatButton {
    height: 36px;
    float: right;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    border-radius: 4px;
    line-height: 16px;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.blueButtonTextColor};
    border-color: ${(props) => props.theme.blueButtonTextColor};
  }
  .Con_shopping {
    width: 180px;
    height: 30px;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.blueButtonTextColor};
    border-color: ${(props) => props.theme.blueButtonTextColor};
    margin-bottom: 40px;
  }
  .remove_link {
    display: block;
    text-align: right;
    margin-top: 40px;
  }
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const RowDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  div {
    margin: 10px 10px 10px 0;
  }
`;
const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 20px;
  align-items: center;
`;
export { Container, RowDiv, ColumnDiv, GridDiv };
