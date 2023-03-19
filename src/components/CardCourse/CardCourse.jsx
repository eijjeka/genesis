import {
  PreTitle,
  Item,
  Title,
  MetaWrapper,
  Rating,
  Image,
} from "./CardCourse.styled";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { ItemLink } from "../CardCourse/CardCourse.styled";
import { Skills } from "../Skills/Skills";

const CardCourse = ({ itemData }) => {
  const location = useLocation();
  const { previewImageLink, title, lessonsCount, rating, id, meta } = itemData;

  return (
    <>
      <Item>
        <ItemLink to={`${id}`} state={{ from: location }}>
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
            <PreTitle>This course includes {lessonsCount} lessons</PreTitle>
            <Rating value={rating}>{rating}</Rating>
            <Skills meta={meta} />
          </MetaWrapper>
        </ItemLink>
      </Item>
    </>
  );
};

export default CardCourse;

CardCourse.propTypes = {
  itemData: PropTypes.object.isRequired,
};
