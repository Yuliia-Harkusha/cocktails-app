import React from "react";
import { useGlobalContext } from "../../context";
import { SectionForm, Form, Label, Input } from "./SearchForm.styled";

export const SearchForm = () => {
  const { setQuery } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSearch = () => {
    setQuery(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SectionForm>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">search the cocktail</Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter here"
          ref={searchValue}
          onChange={handleSearch}
        />
      </Form>
    </SectionForm>
  );
};
