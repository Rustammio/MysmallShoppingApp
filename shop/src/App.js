import './App.css';
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";
import Modal from "./components/Modal/Modal";
import {Route, Routes} from "react-router-dom";
import Bin from "./pages/bin/Bin";
import Favorites from "./pages/favorites/Favorites";
import Main from './pages/main/Main'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addToCartAC, addToFavoriteAC, fetchCards, removeFromCartAC, removeFromFav} from "./store/cards/actions";
import {closeModal, closeModalRemove, openModal, openModalRemove} from "./store/modal/actons";
import {decrementBinCounter, incremrntBinCounter} from "./store/cart/actons";

const AppFunc = () => {


    const [favCounter, setFavCounter] = useState(0);

    const [cardToAdd, setCardToAdd] = useState(null);
    const [areFavorite, setAreFavorite] = useState([]);
    const data = useSelector(state => state.cardsReducer.data, shallowEqual);
    const isOpen = useSelector(state => state.modalReducer.isOpen);
    const isOpenRemove = useSelector(state => state.modalReducer.isOpenRemove);
    const binCounter = useSelector(state => state.cartReducer.binCounter);
    const areInBin = useSelector(state => state.cartReducer.areInBin);
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem('favCounter')) {
            setFavCounter(JSON.parse(localStorage.getItem('favCounter')))
        }

        const fav = JSON.parse(localStorage.getItem('areFavorite'));
        if (localStorage.getItem('areFavorite')) {
            setAreFavorite(fav)
        }


        dispatch(fetchCards())
    }, [dispatch]);

    const toggleModal = (id, name) => {
        if (isOpen) {

            dispatch(closeModal());
            setCardToAdd(null)
        } else {

            dispatch(openModal());
            setCardToAdd({id, name})
        }
    };
    const toggleModalRemove = (id, name) => {
        if (isOpenRemove) {
            dispatch(closeModalRemove());
            setCardToAdd(null)
        } else {
            dispatch(openModalRemove());
            setCardToAdd({id, name})
        }
    };
    const addToCart = (id) => {

        dispatch(incremrntBinCounter(id));
        dispatch(addToCartAC(id))

    };
    const removeFromBin = (id) => {

        dispatch(decrementBinCounter(id))
        dispatch(removeFromCartAC(id))


    };
    const addFavorite = (id) => {
        setFavCounter(prevState => {
            const cur = prevState + 1;
            localStorage.setItem('favCounter', JSON.stringify(cur));
            return cur
        });

        setAreFavorite(prevState => {
            const cur = [...prevState, id];
            localStorage.setItem('areFavorite', JSON.stringify(cur));
            return cur
        });
        dispatch(addToFavoriteAC(id))
    };
    const rmFavorite = (id) => {
        setFavCounter(prevState => {
            const cur = prevState - 1;
            localStorage.setItem('favCounter', JSON.stringify(cur));
            return cur;
        });

        const edit = JSON.parse(localStorage.getItem('areFavorite'));
        const index = edit.findIndex((e) => e === id);
        edit.splice(index, 1);
        localStorage.setItem('areFavorite', JSON.stringify(edit));
        setAreFavorite(edit);
        dispatch(removeFromFav(id))

    };


    return (
        <div className="App">
            <Header binCounter={binCounter} favCounter={favCounter}/>

            <Routes>
                <Route  path='/' element={<Main data={data} rmFavorite={rmFavorite} addFavorite={addFavorite}
                                               toggleModal={toggleModal} toggleModalRemove={toggleModalRemove}/>}/>
                <Route path='bin'
                       element={<Bin data={data} areInBin={areInBin} rmFavorite={rmFavorite} addFavorite={addFavorite}
                                     toggleModal={toggleModal} toggleModalRemove={toggleModalRemove}/>}/>
                <Route path='favorites'
                       element={<Favorites data={data} areFavorite={areFavorite} rmFavorite={rmFavorite}
                                           addFavorite={addFavorite}
                                           toggleModal={toggleModal} toggleModalRemove={toggleModalRemove}/>}/>
            </Routes>

            {isOpen &&
                <Modal wineToAdd={cardToAdd.name} cardToAdd={cardToAdd.id} toCart={addToCart} toggle={toggleModal}/>}
            {isOpenRemove &&
                <Modal cardToAdd={cardToAdd.id} wineToAdd={cardToAdd.name} title='Remove'
                       body={'Are you sure you want to remove item from the bin?'}
                       toCart={removeFromBin} toggle={toggleModalRemove}/>}

        </div>
    );
};
export default AppFunc