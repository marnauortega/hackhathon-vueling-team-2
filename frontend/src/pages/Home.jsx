import { useContext, useState } from "react";
import { UsersContext } from "../main";
import styles from "../styles/Home.module.css";
import table from "../../public/img/table.png";
import fulltime from "../../public/img/full-time-employee.svg";
import parttime from "../../public/img/part-time-employee.svg";
import jardinera from "../../public/img/jardinera.svg";
import equipaje from "../../public/img/equipaje.svg";
// import coordinacion from "../../public/img/coordinacion.svg";
import fakeUsers from "../data/db";

const Home = () => {

  const { users, setUsers } = useContext(UsersContext);

  const [filters, setfilters] = useState({
    day: "des",
    hour: "des",
    handlingFunction: "des",
    totalEmployees: "des",
    totalCost: "des",
  });

  const selectIcon = (input) => {
    if (input.toLowerCase() === "jardinera") return jardinera;
    if (input.toLowerCase() === "equipaje") return equipaje;
    if (input.toLowerCase() === "coordinacion") return coordinacion;
  };

  const sortByDay = () => {
    if (filters.day === "asc") {
      const usersCopy = [...users];
      usersCopy.sort((a, b) => {
        if (a.day > b.day) {
          return -1;
        }
        if (b.day > a.day) {
          return 1;
        }
        return 0;
      });
      setUsers(usersCopy);
      setfilters({ ...filters, day: "des" });
      console.log(usersCopy);
    }
    if (filters.day === "des") {
      const usersCopy = [...users];
      usersCopy.sort();
      setUsers(usersCopy);
      setfilters({ ...filters, day: "asc" });
      console.log(usersCopy);
    }
  };

  const sortByHour = () => {
    if (filters.hour === "asc") {
      const usersCopy = [...users];
      usersCopy.sort((a, b) => a.hour - b.hour);
      setUsers(usersCopy);
      setfilters({ ...filters, hour: "des" });
    }
    if (filters.hour === "des") {
      const usersCopy = [...users];
      usersCopy.sort((a, b) => b.hour - a.hour);
      setUsers(usersCopy);
      setfilters({ ...filters, hour: "asc" });
    }
  };

  const sortByTask = () => {
    if (filters.handlingFunction === "asc") {
      const usersCopy = [...users];
      usersCopy.sort((a, b) => {
        if (a.handlingFunction.toLowerCase() > b.handlingFunction.toLowerCase()) {
          return -1;
        }
        if (b.handlingFunction.toLowerCase() > a.handlingFunction.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setUsers(usersCopy);
      setfilters({ ...filters, handlingFunction: "des" });
    }
    if (filters.handlingFunction === "des") {
      const usersCopy = [...users];
      usersCopy.sort((a, b) => {
        if (b.handlingFunction.toLowerCase() > a.handlingFunction.toLowerCase()) {
          return -1;
        }
        if (a.handlingFunction.toLowerCase() > b.handlingFunction.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setUsers(usersCopy);
      setfilters({ ...filters, handlingFunction: "asc" });
    }
  };

  const sortByEmp = () => {
    if (filters.totalEmployees === "asc") {
      const usersCopy = [...users];
      usersCopy.sort((a, b) => a.totalEmployees - b.totalEmployees);
      setUsers(usersCopy);
      setfilters({ ...filters, totalEmployees: "des" });
      console.log(usersCopy);
    }
    if (filters.totalEmployees === "des") {
      const usersCopy = [...users];
      usersCopy.sort((a, b) => b.totalEmployees - a.totalEmployees);
      setUsers(usersCopy);
      setfilters({ ...filters, totalEmployees: "asc" });
      console.log(usersCopy);
    }
  };

  const sortByCost = () => {
    if (filters.totalCost === "asc") {
      const usersCopy = [...users];
      usersCopy.sort((a, b) => a.totalCost - b.totalCost);
      setUsers(usersCopy);
      setfilters({ ...filters, totalCost: "des" });
    }
    if (filters.totalCost === "des") {
      const usersCopy = [...users];
      usersCopy.sort((a, b) => b.totalCost - a.totalCost);
      setUsers(usersCopy);
      setfilters({ ...filters, totalCost: "asc" });
    }
  };

  return (
    <main className={styles.main}>
      {/* <img src={table} className={styles.tableBg} /> */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <h3 className={styles.h3} onClick={sortByDay}>
                Day
              </h3>
            </th>
            <th>
              <h3 className={styles.h3} onClick={sortByHour}>
                Hour
              </h3>
            </th>
            <th>
              <h3 className={styles.h3} onClick={sortByTask}>
                Task
              </h3>
            </th>
            <th>
              <h3 className={styles.h3}>Employees</h3>
            </th>
            <th>
              <h3 className={styles.h3} onClick={sortByEmp}>
                Total Emp.
              </h3>
            </th>
            <th>
              <h3 className={styles.h3}>Cost</h3>
            </th>
            <th>
              <h3 className={styles.h3} id="asc" onClick={sortByCost}>
                Total cost
              </h3>
            </th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {fakeUsers.map((row) => (
            <tr key={row.id}>
              <td className={styles.cell}>
                <p>{row.day}</p>
              </td>
              <td className={styles.cell}>
                <p>{row.hour}.00h</p>
              </td>
              <td className={styles.cell}>
                <div className={styles.doubleCell}>
                  <img src={selectIcon(row.handlingFunction)} />
                  <p>{row.handlingFunction}</p>
                </div>
              </td>
              <td className={styles.cell}>
                <div className={styles.doubleCell}>
                  <img src={fulltime} />
                  <p> {row.fulltimeEmployees}</p>
                </div>
                <div className={styles.doubleCell}>
                  <img src={parttime} />
                  <p> {row.parttimeEmployees}</p>
                </div>
              </td>
              <td className={styles.cell}>
                <p>{row.totalEmployees}</p>
              </td>
              <td className={styles.cell}>
                <p>{row.fulltimeCost} €</p>
                <p>{row.parttimeCost} €</p>
              </td>
              <td className={styles.cell}>
                <p>{row.totalCost} €</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </main>
  );
};

export default Home;
