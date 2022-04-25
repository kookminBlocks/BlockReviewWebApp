import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import {
  getNftUri,
  getNftData,
  createLiked,
  adminPubKey,
  trade,
} from "../../../api/contract";

function StoreReview(props) {
  const [modalReview, reviewChanged] = useState(null);
  const [modalShow, modalChanged] = useState(false);
  const [ntfUrl, UrlChanged] = useState();
  const [nftData, nftDataChanged] = useState();

  const ipfsUrl = "http://3.38.183.241/ipfs/";
  const handleClose = () => modalChanged(false);
  const handleShow = () => modalChanged(true);

  const Review_Clicked = async (item) => {
    reviewChanged(item);
    if (item.nftId != null) {
      const res = await getNftUri(item?.nftId);
      const hash = res.data;
      UrlChanged(ipfsUrl + hash);
      const dt_res = await getNftData(ntfUrl);
      console.log(dt_res);
      nftDataChanged(dt_res.data);
    }
    handleShow();
  };

  const Btn_Liked_Click = async (review) => {
    // 유저정보읽기
    let user = JSON.parse(localStorage.getItem("user"));
    const postDt = {
      reviewId: review.id,
      admin: adminPubKey,
      amount: 100,
      pubkey: user.accountPublicKey,
      privatekey: user.accountPrivateKey,
    };
    let res = await createLiked(postDt);
    if (res?.status == 200) {
      alert("좋아요 성공~");
      props.like_click();
    } else {
      alert(`좋아요 실패 ${res.data}`);
    }
  };

  const Btn_Buy_Clicked = async (review) => {
    // 유저정보읽기
    let user = JSON.parse(localStorage.getItem("user"));
    const params = {
      reviewId: review.id,
      pubkey_buyer: user.accountPublicKey,
      privatekey_buyer: user.accountPrivateKey,
    };
    const res = await trade(params);
    if (res?.status == 200) {
      alert("구매완료");
    } else {
      alert(res?.data);
    }
  };

  return (
    <>
      <Box>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th className="thead">ID</th>
              <th className="thead">Thumb</th>
              <th className="thead">제목</th>
              <th className="thead">내용</th>
              <th className="thead">판매여부</th>
              <th className="thead">구매하기</th>
            </tr>
          </thead>
          <tbody>
            {props.review &&
              props.review.map((item, idx) => (
                <tr id={item.id} key={idx} onClick={() => Review_Clicked(item)}>
                  <td>{item.id}</td>
                  <td>
                    <img
                      style={{ height: "100px", width: "100px" }}
                      src={item.thumbnail}
                    />{" "}
                  </td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <div className="d-flex">
                      {item.liked.length}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          Btn_Liked_Click(item);
                        }}
                        style={{ fontSize: "35px", cursor: "pointer" }}
                      >
                        👍
                      </div>
                    </div>
                  </td>
                  <td>{item.sale ? "판매중" : "X"}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        Btn_Buy_Clicked(item);
                      }}
                    >
                      구매하기
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Box>

      <Modal
        show={modalShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> {modalReview?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalReview?.description}
          <div>
            <h3>NFT 이미지</h3>
            <img
              style={{ height: "130px", width: "450px", objectFit: "cover" }}
              alt={"nftImage"}
              src={ipfsUrl + nftData?.image}
            />
          </div>
          <div>
            <a href={ntfUrl}>NFT 주소로 이동!</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StoreReview;

const Box = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  border: 2px solid black;
`;

const Thead = styled.thead`
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Thead_tr = styled.tr``;

const Thead_td = styled.td`
  padding: 5px;
`;

const Tbody = styled.tbody``;

const Tbody_tr = styled.tr`
  :hover {
    cursor: pointer;
    background-color: aliceblue;
  }
`;

const Tbody_td = styled.td``;
