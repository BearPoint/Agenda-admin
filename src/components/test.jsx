import React from "react";

const USERS_URL = "https://example.com/api/users";

function usePaginationFetch(url) {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(false);
  const [pagination, setPagination] = React.useState(0);
  const [limit, setLimit] = React.useState(Infinity)
  const [isLastOne, setIsLastOne] = React.useState(false)

  React.useEffect(() => {
    try {
      setIsloading(true);
      const getData = async () => {
        const {count, results} = await fetch(
          `${url}?page=${pagination}`
        ).then((res) => res.json());
        setData(results)
        setLimit(count)

        if(results.length < 10) setIsLastOne(true)
      };
      getData();
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  }, [pagination]);

  const next = () => {
    setPagination((old) => ++old);
  };

  const previous = () => {
    setPagination((old) => --old);
  };

  const first = () => {
    setPagination(0);
    setIsLastOne(false)
  };
  const last = () => {
    setPagination(33%10 + 1);
  };

  return { data, isLoading, next, previous, first, last, isLastOne ,pagination};
}

export default function Table() {
  const { data, first, previous, next, last, isLastOne, pagination,isLoading } = usePaginationFetch(USERS_URL);
  return (
    <div>
    {isLoading?
      <div>...Loading</div>: 
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
            <tbody>
              {data.map(({ id, firstName, lastName }) => (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>{firstName}</td>
              <td>{lastName}</td>
            </tr>
            ))}
          </tbody>
      </table>
      }
      <section className="pagination">
        <button className="first-page-btn" disabled={isLoading} onClick={first}>
          first
        </button>
        <button className="previous-page-btn" disabled={!pagination || isLoading} onClick={previous}>
          previous
        </button>
        <button className="next-page-btn" disabled={isLastOne || isLoading} onClick={next}>
          next
        </button>
        <button className="last-page-btn"  disabled={isLoading} onClick={last}>
          last
        </button>
      </section>
    </div>
  );
}
