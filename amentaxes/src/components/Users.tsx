import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//redux
import { loadUsers } from "../actions/userActions";
// graphql
import { useGetUsersQuery } from "../generated/graphql";
import { UsersWrapper } from "../shared/styled/GlobalStyle";

export default function Users() {
  const { data } = useGetUsersQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers(data?.getUsers));
  });
  console.log(data);
  if (data) {
    return <UsersWrapper>salut</UsersWrapper>;
  }

  return <li>Users loading</li>;
}
