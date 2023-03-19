import React, { useEffect, useState } from "react";
import axios from "axios";
import usePagination from "hooks/usePagination";
import CourseList from "../CourseList/CourseList";
//add input for specific page
import {
  App,
  PaginationWrapper,
  Text,
  Button,
  ButtonActive,
  ButtonDisabled,
} from "./Pagination.styled";

function Pagination({ data }) {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: data.length,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          "https://random-data-api.com/api/users/random_user?size=100"
        );
        setPeople(data.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <App>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error fetching users</h2>
      ) : (
        <>
          <PaginationWrapper>
            <Text>
              {page}/{totalPages}
            </Text>
            {page !== 1 ? (
              <Button onClick={prevPage}> &larr;</Button>
            ) : (
              <ButtonDisabled onClick={prevPage}>&larr;</ButtonDisabled>
            )}
            {page !== 1 ? (
              <Button onClick={() => setPage(1)}>1</Button>
            ) : (
              <ButtonDisabled onClick={() => setPage(1)}>1</ButtonDisabled>
            )}
            {gaps.before ? "..." : null}
            {/* @ts-ignore */}
            {gaps.paginationGroup.map((el) => (
              <ButtonActive
                page={page}
                el={el}
                onClick={() => setPage(el)}
                key={el}
              >
                {el}
              </ButtonActive>
            ))}
            {gaps.after ? "..." : null}
            {page !== totalPages ? (
              <Button onClick={() => setPage(totalPages)}>{totalPages}</Button>
            ) : (
              <ButtonDisabled onClick={() => setPage(totalPages)}>
                {totalPages}
              </ButtonDisabled>
            )}
            {page !== totalPages ? (
              <Button onClick={nextPage}>&rarr;</Button>
            ) : (
              <ButtonDisabled onClick={nextPage}>&rarr;</ButtonDisabled>
            )}
          </PaginationWrapper>
          <CourseList
            firstContentIndex={firstContentIndex}
            lastContentIndex={lastContentIndex}
            data={data}
          />
        </>
      )}
    </App>
  );
}

export default Pagination;
