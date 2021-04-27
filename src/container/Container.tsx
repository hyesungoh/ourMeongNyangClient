import React from "react";
import styled from "styled-components";
import Input from "components/Input/Input";
import ImageList from "components/Images/ImageList";

const imageDatas = [
  {
    imageURL:
      "https://file.mk.co.kr/meet/neds/2019/12/image_readtop_2019_1003897_15752469933997492.jpg",
    summary: "우리 댕댕이 참 귀엽죠~~ ^^*",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg",
    summary: "우리 뽀삐 한번 보구가세용 ㅎㅎ",
  },
  {
    imageURL: "https://timesofindia.indiatimes.com/photo/67586673.cms",
    summary: "고양이입니당",
  },
  {
    imageURL: "https://i.imgur.com/8clFw0e.jpg",
    summary: "고양이는 애옹애옹 웁니다 슬프니까요",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/BAF5/production/_111516874_gettyimages-451627799-1.jpg",
    summary: "멍멍이와 고양이는 둘도 없는 친구입니다",
  },
  {
    imageURL:
      "https://blogs.cdc.gov/publichealthmatters/files/2020/05/golden_retiver_cat_cropped-1024x458.jpg",
    summary:
      "멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥",
  },
  {
    imageURL:
      "https://file.mk.co.kr/meet/neds/2019/12/image_readtop_2019_1003897_15752469933997492.jpg",
    summary: "우리 댕댕이 참 귀엽죠~~ ^^*",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg",
    summary: "우리 뽀삐 한번 보구가세용 ㅎㅎ",
  },
  {
    imageURL: "https://timesofindia.indiatimes.com/photo/67586673.cms",
    summary: "고양이입니당",
  },
  {
    imageURL: "https://i.imgur.com/8clFw0e.jpg",
    summary: "고양이는 애옹애옹 웁니다 슬프니까요",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/BAF5/production/_111516874_gettyimages-451627799-1.jpg",
    summary: "멍멍이와 고양이는 둘도 없는 친구입니다",
  },
  {
    imageURL:
      "https://blogs.cdc.gov/publichealthmatters/files/2020/05/golden_retiver_cat_cropped-1024x458.jpg",
    summary:
      "멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥",
  },
  {
    imageURL:
      "https://file.mk.co.kr/meet/neds/2019/12/image_readtop_2019_1003897_15752469933997492.jpg",
    summary: "우리 댕댕이 참 귀엽죠~~ ^^*",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg",
    summary: "우리 뽀삐 한번 보구가세용 ㅎㅎ",
  },
  {
    imageURL: "https://timesofindia.indiatimes.com/photo/67586673.cms",
    summary: "고양이입니당",
  },
  {
    imageURL: "https://i.imgur.com/8clFw0e.jpg",
    summary: "고양이는 애옹애옹 웁니다 슬프니까요",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/BAF5/production/_111516874_gettyimages-451627799-1.jpg",
    summary: "멍멍이와 고양이는 둘도 없는 친구입니다",
  },
  {
    imageURL:
      "https://blogs.cdc.gov/publichealthmatters/files/2020/05/golden_retiver_cat_cropped-1024x458.jpg",
    summary:
      "멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥멍냥",
  },
];

const fetchImage = () => {
    return imageDatas;
};

const displayMax = 60;

const StyledMain = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: ${({ theme }) => theme.colorWhite};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = () => {
  return (
    <StyledMain>
      <Input />
      <ImageList
        imageDatas={imageDatas}
        fetchImage={fetchImage}
        displayMax={displayMax}
      />
    </StyledMain>
  );
};

export default Container;
