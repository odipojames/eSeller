import React from "react";

import { FlashProductCard } from "components/card/FlashCard/flashSaleCard";
import { flashProducts } from "components/card/FlashCard/fixture";

export const Campaign = () => {
  return (
    <>
      <FlashProductCard products={flashProducts} />
    </>
  );
};
