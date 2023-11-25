import React from 'react';
import './Detail.css'

const Detail = () => {
    return (
        <div className="content container-fluid d-flex flex-column justify-content-start align-items-center" style = {{color: "white"}}>
            {/* Detail view: left 30% picture of product, right part name, description */}
            <div className="container-fluid d-flex flex-row justify-content-center align-items-center mt-3">
                <div className="col-4">
                    <img src="https://via.placeholder.com/300" className="img-fluid" alt="Responsive image" />
                </div>
                <div className="col-8">
                    <div className="row-8 d-flex flex-row justify-content-between align-items-center">
                        <h1>Название</h1>
                        <div>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star-half-o rating-color"></i>
                            <i className="fa fa-star-o rating-color"></i>
                            <i className="fa fa-star-o rating-color"></i>
                        </div>
                    </div>
                        <p className="text-justify text-wrap text-break text-muted text">Enim elit pariatur veniam reprehenderit
                        excepteur. Duis occaecat fugiat ea excepteur adipisicing duis. Sit culpa exercitation officia
                        exercitation excepteur amet ipsum do elit deserunt sit nulla laboris pariatur. Est nostrud voluptate
                        ullamco duis magna ea anim magna cupidatat qui ipsum Lorem laboris aliquip.</p>
                </div>
            </div>
            {/* List of places where the product exists */}
            <div className="card bg-dark col mt-3 p-3 d-flex flex-column justify-content-between" style = {{color: "white"}}>
                <h5 className="card-title">Места</h5>
                {/* Space between */}
                <form className="d-flex flex-row col-9 justify-content-between align-items-center" action="/action_page.php" method="get">
                    <p className="text-justify text-wrap text-break ">
                        Место 1
                    </p>
                    {/* Price */}
                    <p className="text-justify text-wrap text-break">
                        Цена: 1000 тг
                    </p>
                    {/* Quantity */}
                    <div className="form-group d-flex flex-row justify-content-center align-items-center">
                        <label htmlFor="exampleFormControlSelect1">Количество</label>
                        <input type="number" className="form-control ml-3" id="exampleFormControlSelect1" defaultValue="1" min="1" max="100" />
                    </div>
                    <button type="submit" className="btn btn-primary ml-3">Добавить в корзину</button>
                </form>
            </div>
            {/* Comments block */}
            <div className="col-8 mt-3">
                <h3>Отзывы</h3>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="col-2">
                        <img src="https://via.placeholder.com/100" className="img-fluid" alt="Responsive image" />
                        <p className="text-center">Имя</p>
                    </div>
                    <div className="col-10">
                        <p className="text-justify text-wrap text-break text-muted">Enim elit pariatur veniam reprehenderit
                            excepteur. Duis occaecat fugiat ea excepteur adipisicing duis. Sit culpa exercitation officia
                            exercitation excepteur amet ipsum do elit deserunt sit nulla laboris pariatur. Est nostrud
                            voluptate ullamco duis magna ea anim magna cupidatat qui ipsum Lorem laboris aliquip.</p>
                    </div>
                </div>
                {/* Create comment */}
                <div className="row-8 mt-3">
                    <input type="text" name="comment" id="comment" className="form-control" placeholder="Оставить комментарий" />
                    <button type="submit" className="btn btn-primary mt-3">Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;