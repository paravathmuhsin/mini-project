import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUsers } from "../../services/user.service";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useAppContext } from "../../componets/AppContext/AppContext";

const List = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { setPageTitle, setAppBreadcrumbs } = useAppContext();
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);
  useEffect(() => {
    setPageTitle("Users List");
    setAppBreadcrumbs([
      {
        label: "Home",
        link: "/",
      },
      {
        label: "Users",
        link:"/users"
      },
    ]);
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 800,
        margin: "auto",
        mt: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" align="center" sx={{ mt: 2 }}>
        Users List
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item, index) => (
            <TableRow
              key={item.id}
              onClick={() => navigate(`/users/${item.id}`)}
              sx={{ cursor: "pointer", "&:hover": { backgroundColor: "#333" } }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
