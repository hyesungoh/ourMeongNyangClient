import React from "react";
import styled from "styled-components";
import Input from "components/Input/Input";
import Images from "components/Images/Images";

const imageDatas = [
  {
    imageURL:
      "https://file.mk.co.kr/meet/neds/2019/12/image_readtop_2019_1003897_15752469933997492.jpg",
    summary:
      "The burgeoning pet industry in South Korea has emerged as another promising market for startups with expertise in artificial intelligence (AI) and robotics.",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg",
    summary:
      "The pandemic boost to pet ownership has led retail chain Pets at Home to raise its profit forecast yet again as demand for pet products continues to soar.",
  },
  {
    imageURL: "https://timesofindia.indiatimes.com/photo/67586673.cms",
    summary:
      "Cats have a strong sense of smell and hearing. They might react to certain stimuli in strange ways and get scared easily.",
  },
  {
    imageURL: "https://i.imgur.com/8clFw0e.jpg",
    summary:
      "Is there any context? Why does the cat look so distressed? Abuse? Sickness? I didn't know if any of you here had any insight cause this meme has always made me feel sad instead of laugh.",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/BAF5/production/_111516874_gettyimages-451627799-1.jpg",
    summary:
      'Pets at Home says it is seeing "exceptional levels of demand" amid the coronavirus outbreak. The pet store and vets group said people had been spending more as pets played an "increasingly vital role in our lives" during the crisis.',
  },
  {
    imageURL:
      "https://blogs.cdc.gov/publichealthmatters/files/2020/05/golden_retiver_cat_cropped-1024x458.jpg",
    summary:
      "With the recent news of tigers, lions, and pet cats and dogs in the US testing positive for the virus that causes coronavirus disease 2019 (COVID-19), you may be wondering about the risks to your pets.",
  },
  {
    imageURL:
      "https://file.mk.co.kr/meet/neds/2019/12/image_readtop_2019_1003897_15752469933997492.jpg",
    summary:
      "The burgeoning pet industry in South Korea has emerged as another promising market for startups with expertise in artificial intelligence (AI) and robotics.",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg",
    summary:
      "The pandemic boost to pet ownership has led retail chain Pets at Home to raise its profit forecast yet again as demand for pet products continues to soar.",
  },
  {
    imageURL: "https://timesofindia.indiatimes.com/photo/67586673.cms",
    summary:
      "Cats have a strong sense of smell and hearing. They might react to certain stimuli in strange ways and get scared easily.",
  },
  {
    imageURL: "https://i.imgur.com/8clFw0e.jpg",
    summary:
      "Is there any context? Why does the cat look so distressed? Abuse? Sickness? I didn't know if any of you here had any insight cause this meme has always made me feel sad instead of laugh.",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/BAF5/production/_111516874_gettyimages-451627799-1.jpg",
    summary:
      'Pets at Home says it is seeing "exceptional levels of demand" amid the coronavirus outbreak. The pet store and vets group said people had been spending more as pets played an "increasingly vital role in our lives" during the crisis.',
  },
  {
    imageURL:
      "https://blogs.cdc.gov/publichealthmatters/files/2020/05/golden_retiver_cat_cropped-1024x458.jpg",
    summary:
      "With the recent news of tigers, lions, and pet cats and dogs in the US testing positive for the virus that causes coronavirus disease 2019 (COVID-19), you may be wondering about the risks to your pets.",
  },
  {
    imageURL:
      "https://file.mk.co.kr/meet/neds/2019/12/image_readtop_2019_1003897_15752469933997492.jpg",
    summary:
      "The burgeoning pet industry in South Korea has emerged as another promising market for startups with expertise in artificial intelligence (AI) and robotics.",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg",
    summary:
      "The pandemic boost to pet ownership has led retail chain Pets at Home to raise its profit forecast yet again as demand for pet products continues to soar.",
  },
  {
    imageURL: "https://timesofindia.indiatimes.com/photo/67586673.cms",
    summary:
      "Cats have a strong sense of smell and hearing. They might react to certain stimuli in strange ways and get scared easily.",
  },
  {
    imageURL: "https://i.imgur.com/8clFw0e.jpg",
    summary:
      "Is there any context? Why does the cat look so distressed? Abuse? Sickness? I didn't know if any of you here had any insight cause this meme has always made me feel sad instead of laugh.",
  },
  {
    imageURL:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/BAF5/production/_111516874_gettyimages-451627799-1.jpg",
    summary:
      'Pets at Home says it is seeing "exceptional levels of demand" amid the coronavirus outbreak. The pet store and vets group said people had been spending more as pets played an "increasingly vital role in our lives" during the crisis.',
  },
  {
    imageURL:
      "https://blogs.cdc.gov/publichealthmatters/files/2020/05/golden_retiver_cat_cropped-1024x458.jpg",
    summary:
      "With the recent news of tigers, lions, and pet cats and dogs in the US testing positive for the virus that causes coronavirus disease 2019 (COVID-19), you may be wondering about the risks to your pets.",
  },
];

const fetchImage = () => {
    return imageDatas;
};

const displayMax = 60;

const StyledMain = styled.main`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  background-color: white;
`;

const Container = () => {
  return (
    <StyledMain>
      <Input />
      <Images
        imageDatas={imageDatas}
        fetchImage={fetchImage}
        displayMax={displayMax}
      />
    </StyledMain>
  );
};

export default Container;
