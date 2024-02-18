import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SearchTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;
export const SearchForm = styled.form`
  margin-bottom: 6px;
`;
export const SearchInput = styled.input``;
export const SearchBtn = styled.button``;
export const SearchResultWrapper = styled.div`
  min-width: 330px;
  padding: 20px 10px;
`;
export const SearchResultText1 = styled.p`
  margin-bottom: 8px;
`;
export const SearchResultText2 = styled.p``;

export const Bar = styled.div`
  width: 400px;
  height: 0px;
  border-bottom: 1px solid white;
  margin: 20px 0;
`;

export const ListWrapper = styled.div`
  min-width: 380px;
`;
export const ListTitle = styled.h3`
  text-align: center;
  font-size: 26px;
  margin-bottom: 14px;
`;
export const ListUL = styled.ul``;
export const ListLI = styled.li`
  border: 1px solid whitesmoke;
  padding: 10px 8px;
  text-align: center;
`;
