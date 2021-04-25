import styled from "styled-components";
const CategoriesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
  row-gap: 40px;

  .category__container {
    display: flex;
    flex: 1 1 200px;
    flex-direction: column;
    div {
      p {
        width: 180px;
        font-weight: 400;
        font-size: 16px;
        font-family: Roboto, sans-serif;
        color: ${(props) => props.theme.blackText};
        line-height: 24px;
        margin-bottom: 0.5em;
      }
    }
    img {
      width: 181px;
      height: 91px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    span {
      height: 10px;
      width: 180px;
      color: ${(props) => props.theme.blueText};
      font-family: Roboto, sans-serif;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.15px;
      line-height: 3px;
    }
  }
`;

const CategoryFooter = styled.div`
  div {
    hr {
      width: 100%;
    }
  }
  .footer_text {
    display: flex;
    margin-bottom: 30px;

    ul {
      display: flex;
      padding-left: unset;
      list-style: none;
      justify-content: space-between;
      .other_categories {
        color: ${(props) => props.theme.blueText};
        font-size: 22px;
        margin-right: 60px;
        letter-spacing: 0.15px;
        font-weight: 500;
        font-family: Roboto, sans-serif;
        margin-left: unset;
      }
      li {
        letter-spacing: 0.15px;
        font-family: Roboto, sans-serif;
        font-size: 18px;
        font-weight: 40;
        margin-top: 30px;
        margin-left: 27px;
        color: ${(props) => props.theme.blackText};
      }
    }
  }
`;

export { CategoriesContainer, CategoryFooter };
