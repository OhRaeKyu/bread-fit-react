import React from 'react';
import styled from '@emotion/styled/';
import { PALLETS } from '../../../constants';

function ProductInfo({ userData }) {
  return (
    <ProductSection>
      <WrapProduct>
        <h2>판매 중인 상품</h2>
        <ProductList>
          {/* 데이터 list 반복문으로 랜더링하면 됩니다. */}
          <li>
            <img
              src="/assets/product-img.jpg"
              alt="판매 중인 상품에 대한 이미지입니다."
            />
            <p className="product-name">에그타르트</p>
            <p className="product-price">000,000원</p>
          </li>
        </ProductList>
      </WrapProduct>
    </ProductSection>
  );
}

const ProductSection = styled.section`
  width: 100%;
  margin: 10px 0;
  padding: 20px 0;
  background-color: ${PALLETS.WHITE};
  border-top: 1px solid ${PALLETS.LIGHTGRAY};
  border-bottom: 1px solid ${PALLETS.LIGHTGRAY};
`;

const WrapProduct = styled.div`
  width: 390px;
  margin: 0 auto;

  h2 {
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

const ProductList = styled.ul`
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  li + li {
    margin-left: 10px;
  }

  li {
    display: inline-block;

    img {
      width: 140px;
      border-radius: 5px;
    }

    p {
      margin-left: 2px;
    }

    .product-name {
      font-size: 14px;
      margin: 2px 0 5px;
    }

    .product-price {
      font-size: 12px;
      color: ${PALLETS.BEIGE};
    }
  }
`;

export default ProductInfo;
