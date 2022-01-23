import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled/';
import { PALLETS } from '../../../constants';
function ProductInfo({ userData }) {
  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    fetch('http://146.56.183.55:5050/product/lion123', {
      method: 'GET',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWE5Y2ZhY2QyN2I2Y2Y2NWY5NTJlZCIsImV4cCI6MTY0Nzk0OTU3OCwiaWF0IjoxNjQyNzY1NTc4fQ.yvPTEypDONy8Pbf0Rp30u66ceoqi-esfavk1CtWK4nA`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductInfo(data.product);
      });
  }, []);
  return (
    <>
      <ProductSection >
      <WrapProduct>
        <h2>판매 중인 상품</h2>
        <div className='productListWrap'>
          {productInfo.map((data)=>(
            <ProductList key={data.id}>
              {/* 데이터 list 반복문으로 랜더링하면 됩니다. */}
              <li>
                <img
                  src={data.itemImage}
                  alt="판매 중인 상품에 대한 이미지입니다."
                />
                <p className="product-name">{data.itemName}</p>
                <p className="product-price">{data.price}</p>
              </li>
            </ProductList>
          ))}
      </div>
      </WrapProduct>
    </ProductSection>
    </>
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
  .productListWrap {
    display: flex;
  }
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
      height: 100px;
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
