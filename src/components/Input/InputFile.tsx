import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import InputImagePreview from "./InputImagePreview";

interface IInputFile {
    image: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
}

const InputFile = ({ image, setImage }: IInputFile) => {
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { files },
        } = e;
        const targetImage = files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result as string);
        };
        reader.readAsDataURL(targetImage as Blob);
    };

    return (
        <StyledFileDiv>
            <InputImagePreview imageURL={image} />
            <StyledFileLabel htmlFor="file">
                <FontAwesomeIcon icon={faUpload} size="2x"></FontAwesomeIcon>
            </StyledFileLabel>
            <StyledFileInput
                id="file"
                type="file"
                accept="image/*"
                onChange={onFileChange}
            />
        </StyledFileDiv>
    );
};

export default InputFile;

const StyledFileDiv = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colorGray};

    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: ${({ theme }) => theme.sizeTablet}) {
        width: 100%;
        height: 50%;
    }
`;

const StyledFileLabel = styled.label`
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2.5px dashed ${({ theme }) => theme.colorNavy};
    border-radius: 16px;
    cursor: pointer;
    color: ${({ theme }) => theme.colorNavy};
`;

const StyledFileInput = styled.input`
    display: none;
`;
