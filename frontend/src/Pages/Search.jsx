import { useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import searchPageReducer from "../Reducers/searchPageReducer";

const prices = [
  { name: "$1-$50", value: "1-50" },
  { name: "$51-$200", value: "51-200" },
  { name: "$201-$1000", value: "201-1000" },
]; //maybe add 1000+

const ratings = [
  { name: "4 stars and up", rating: 4 },
  { name: "3 stars and up", rating: 3 },
  { name: "2 stars and up", rating: 2 },
  { name: "1 star and up", rating: 1 },
];

const Search = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const category = searchParams.get("category") || "all";
  const query = searchParams.get("query") || "all";
  const price = searchParams.get("price") || "all";
  const rating = searchParams.get("rating") || "all";
  const order = searchParams.get("order") || "newest";
  const page = searchParams.get("page") || 1; //feels smelly...

  const [{ loading, error, products, pages, countProducts }, dispatch] =
    useReducer(searchPageReducer, { loading: true, error: "" });
  return <div>Search</div>;
};

export default Search;
