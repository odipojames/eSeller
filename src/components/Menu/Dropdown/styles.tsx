import styled from "styled-components";

const DropdownContainer = styled.div`
.dropdown {
    float: left;
    overflow: hidden;
    border: 1px solid #fff;
    border-radius: 5px;

    .dropdown-icon {
      margin-left: 5px;
    }
  }
  
  /* Dropdown button */
  .dropbtn {
    font-size: 10px;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
  }

  
  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: None;
    position: absolute;
    background-color: #f9f9f9;
    width: 100%;
    left: 0;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    padding: 16px 70px!important
  }
  
  /* Mega Menu header, if needed */
  .dropdown-content .header {
    background: white;
    padding: 16px;
    color: black;
  }

  .category-item {
    margin: 5px;
  }

  .category-item:onfocus {
    outline: none;
  }

  .category-item img {
      cursor: pointer;
      width: 150px;
  }

  .category-name {
      cursor: pointer;
  }

  .category-name {
      color: black!important;
      font-size: 12px!important;
      font-weight: 500;
  }

  .arrow {
      color: black!important;
      cursor: pointer
  }

  .arrow img {
    width: 30px;

  }

  .dropdown-content:hover .arrow img {
    display: block
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
  

`

export { DropdownContainer}
