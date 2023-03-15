import { ItemLink, Item, Title, MetaWrapper, Image } from "./CardCourse.styled";
import PropTypes from "prop-types";

const CardCourse = ({ itemData }) => {
  const { previewImageLink, title } = itemData;

  return (
    <>
      <Item>
        <Image
          src={
            previewImageLink
              ? `${previewImageLink}/cover.webp`
              : `https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`
          }
          alt=""
        />
        <MetaWrapper>
          <Title>{title}</Title>
        </MetaWrapper>
      </Item>
    </>
  );
};

export default CardCourse;

CardCourse.propTypes = {
  itemData: PropTypes.object.isRequired,
};
