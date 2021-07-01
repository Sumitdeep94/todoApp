import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import axios from 'axios';

export const Paging = () => {
    const [totalPage, setTotalPage] = useState(0);
    const [data, setData] = useState([]);

    useEffect(()=>{
        getUsers(1);
    }, [])
    const getUsers = (cPage) => {
        axios.get('https://reqres.in/api/users', {
            params: {
              page: cPage
            }
          }).then(response => {
        setData(response.data.data);
        setTotalPage(response.data.total_pages);
        } )
    }
    const handlePageClick = (data) => {
        debugger;
        getUsers(data.selected + 1);
      };

    return(
        <div>
            {data.length > 0 && data.map((item, i) => {
                return(
                    <div className="users"> <img src={item.avatar}/> {item.first_name} {item.last_name}</div>
                )
            })}
            <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={totalPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(data) => handlePageClick(data)}
            containerClassName={'pagination'}
            activeClassName={'active'}
            />
        </div>
    )
}