import React,{useEffect,useState} from "react";
import { Container, RowDiv, ColumnDiv } from "styles/wishlist";
import { Button,Pagination } from "antd";
import Link from "next/link";
import notification from "../../utils/toast";
import GlobalContainer from "../../styles/globalContainer";
import {useSelector} from "react-redux";


export const addToWishList = (data:any) => {



  const id = data.id;
  if (typeof localStorage !== "undefined") {
    const items = JSON.parse(localStorage.getItem("wishlist") || "[]");
    //add only non existing items
    const existentItem = items.find((item: any) => item.id === id);
    if (!existentItem) {
      items.push(data);
      localStorage.setItem("wishlist", JSON.stringify(items));
      notification.success({
        message:"success",
        description:"item added to your wish list"
      })
    }
    else{
      notification.warning({
        message:"just proceed to wishlist",
        description:"already in your wish list"
      })
    }
  }


};

const WishList = (props:any) => {
     const[wishList,setList] = useState(Array);
     const [minValue, setMinValue] = useState(0);
     const [maxValue, setMaxValue] = useState(2);

     const user = useSelector((state:any)=>state.auth?.profile);



    const removeItem = (product: any) => {
       const id = product.id;
       const newArray = wishList ;
       const index = newArray.indexOf(product);
       if(index !== -1){
          newArray.splice(index, 1);
       }
       setList(wishList.filter((item: any) => item.id !== id));
       localStorage.setItem("wishlist", JSON.stringify(newArray));
     };

     const moveToCart = (data: any) => {
       const id = data.id;
       //add only non existing items
       const items = JSON.parse(localStorage.getItem("items") || "[]");
       const existentItem = items.find((item: any) => item.id === id);
       if (!existentItem) {
        const newCartArray = [...items,data];
        localStorage.setItem("items", JSON.stringify(newCartArray));
        //remove it from wishlist
        removeItem(data);
       }
       //check if product already in cart and update its quantity
       if (existentItem) {
             const newArray = items.map((item: any) => {
             if (item.id !== id) return item;
             return { ...item, quantity: item.quantity + 1 };
           }) ;
           localStorage.setItem("items", JSON.stringify(newArray));
           removeItem(data);
       }
       notification.success({
         message:"success",
         description:"item added to your cart"
       })
     };


     useEffect(() => {
       const list = JSON.parse(localStorage.getItem("wishlist") || "[]");
       if (list) {
         setList(list);
       };

     }, [wishList.length]);




     //Pagination
     const handleChange = (value: any) => {
       if (value <= 1) {
         setMinValue(0);
         setMaxValue(2);
       } else {
         setMinValue(maxValue);
         setMaxValue(value * 2);
       }
     };


  return (
    <GlobalContainer>
    <Container>
      <div className="container">
        <div>
          <span className="Header">My Wishlist</span>
        </div>
        <RowDiv>
          <div className="list_items">
            <div>
              {wishList.length>0?
              <span className="items_header">
                You have items in your wishlist. To buy items from your
                wishlist, move them to your cart.
              </span>:
              <span className="items_header">
                No item in your wish list. To add items, continue shopping
              </span>}
            </div>
            <div>
              <hr />
            </div>
            {wishList.slice(minValue, maxValue).map((product: any, index: number) => (
                <div className="item_section" key={index.toString()}>
                  <RowDiv>
                    <div className="image__section">
                      <img src={product.imagePath} alt="image" />
                    </div>
                    <div className="description_section">
                      <ColumnDiv>
                        <span>Brand</span>
                        <span className="Description">
                          {product.description}
                        </span>
                        <span className="price">{product.price}</span>
                      </ColumnDiv>
                    </div>
                    <div className="cat_buttons">
                      <ColumnDiv>
                        <span>
                          {" "}
                          <Button type="default" className="addToCatButton" onClick={()=>{moveToCart(product)}}>
                            Move to cat
                          </Button>
                        </span>
                        <span>
                          {" "}
                            <a className="remove_link" onClick={()=>{removeItem(product)}}>Remove</a>
                        </span>
                      </ColumnDiv>
                    </div>
                  </RowDiv>
                  <div>
                    <hr />
                  </div>
                </div>
              ))}

              <Pagination
                size="small"
                defaultCurrent={1}
                defaultPageSize={2}
                onChange={handleChange}
                hideOnSinglePage={true}
                total={wishList.length}
              />
            <div>
              <Link href="/">
                <Button type="default" className="Con_shopping">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          <div className="offer_section" />
        </RowDiv>
      </div>
    </Container>
  </GlobalContainer>
  );
};

export default WishList;
