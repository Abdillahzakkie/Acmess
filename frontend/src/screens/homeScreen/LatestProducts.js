import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { listProducts } from '../../actions/productActions';
import Pagination from '../../components/pagination/Pagination.jsx';

const LatestProduct = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, products, error } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div id="buy" style={{marginBottom: '100px'}}>
            <h3 className='text-center'>LATEST WIDGETS</h3>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Pagination
                    data={products}
                    pageLimit={3}
                    dataLimit={6}
                />
                </>
            )}
        </div>
    );
};

export default LatestProduct;
