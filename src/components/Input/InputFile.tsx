import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import InputImagePreview from "./InputImagePreview";

interface IInputFile {
    image: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
    fileInput: React.MutableRefObject<HTMLInputElement | null>;
}

const InputFile = ({ image, setImage, fileInput }: IInputFile) => {
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

    const onFileDelete = () => {
        if (window.confirm("더 귀여운 사진을 찾으시는 중인가요??")) {
            setImage("");
            if (fileInput.current !== null) fileInput.current.value = "";
        }
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
                ref={fileInput}
                accept="image/*"
                onChange={onFileChange}
            />
            <StyledFileDeleteBtn imageURL={image} onClick={onFileDelete}>
                <FontAwesomeIcon icon={faTrashAlt} size="2x"></FontAwesomeIcon>
            </StyledFileDeleteBtn>
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

const StyledFileDeleteBtn = styled.div<{ imageURL: string }>`
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: ${({ theme }) => theme.colorWhite};
    cursor: pointer;

    transform: ${({ imageURL }) => (imageURL === "" ? "scale(0)" : "scale(1)")};
    transition: transform 0.8s;
`;
