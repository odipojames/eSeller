import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  box-shadow: 0 22px 29px 0 rgba(0, 0, 0, 0.1);
  justify-content: space-around;
  align-items: center;
  position: relative;

  .anticon-close {
    position: absolute;
    top: 8%;
    right: 8%;
    cursor: pointer;
    font-size: 30px;
  }
  .image__section {
    width: 50%;
  }
  .brand__section {
    width: 50%;
    display: flex;
    flex-direction: column;

    button {
      height: 50px;
    }

    .cart__section {
      width: 100%;
      justify-content: space-between;
      display: flex;

      button {
        height: 50px;
        width: 300px;
      }
      .ant-input-number {
        height: 50px;
      }
    }
  }
`;

export { ProductContainer };
