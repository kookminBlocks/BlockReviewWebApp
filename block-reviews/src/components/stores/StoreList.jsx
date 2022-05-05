import React from "react";
import "../../scss/Login.scss";
import { useState, useEffect } from "react";
import { GetStores } from "../../api/store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function StoreList() {
  const [stores, storeChanged] = useState([]);
  useEffect(async () => {
    const res = await GetStores();
    if (res.status == 200) {
      console.log(res.data);
      storeChanged(res.data);
    } else {
    }
  }, []);

  return (
    <>
      {stores.length > 0 ? (
        <div className="d-flex flex-wrap">
          {stores.map((item, idx) => {
            return <CardItem key={idx} store={item} />;
          })}
        </div>
      ) : (
        <p>등록된 지점이 없습니다.</p>
      )}
    </>
  );
}

function CardItem(props) {
  const navigate = useNavigate();

  const Btn_Click_Card = (e) => {
    const route = `/store/detail/${e}`;
    navigate(route);
  };

  return (
    <div
      className="card"
      style={{ width: "300px", border: "1px solid gray" }}
      onClick={() => Btn_Click_Card(props.store.id)}
    >
      <img
        className="card-img-top"
        style={{ height: "150px", width: "300px" }}
        src={props.store.thumbNail}
        alt="스토어 이미지"
      />
      <div className="card-body">        
        <h5 className="card-title">{props.store.name}</h5>
        <p className="card-text">{props.store.description}</p>

      </div>
    </div>
  );
}

export default StoreList;


const reviewCnt = styled.div`
  font-Size:14px;
  color:#94D8F6;
`;